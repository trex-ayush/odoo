const User = require('../models/User');
const Skill = require('../models/Skill');

exports.viewMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .select('-password')
      .populate('skillsOffered skillsWanted', 'name description')
      .populate('friends', 'name profilePhoto email');

    if (!user) return res.status(404).json({ success: false, error: 'User not found' });
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, gender, profilePhoto, availability, isPublic } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name, gender, profilePhoto, availability, isPublic },
      { new: true, runValidators: true }
    ).select('-password').populate('skillsOffered skillsWanted', 'name description');

    res.status(200).json({ success: true, data: updatedUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.viewAllFriends = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: 'friends',
      select: 'name profilePhoto email skillsOffered skillsWanted availability',
      populate: { path: 'skillsOffered skillsWanted', select: 'name description' }
    });

    res.status(200).json({ success: true, count: user.friends.length, data: user.friends });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.sendFriendRequest = async (req, res) => {
  try {
    const recipientId = req.params.userId;
    const recipient = await User.findById(recipientId);
    if (!recipient) return res.status(404).json({ success: false, error: 'User not found' });
    if (req.user.friends.includes(recipientId)) return res.status(400).json({ success: false, error: 'Already friends' });

    const existingRequest = req.user.friendRequests.sent.find(
      request => request.to.equals(recipientId) && request.status === 'pending'
    );
    if (existingRequest) return res.status(400).json({ success: false, error: 'Request already sent' });

    await User.findByIdAndUpdate(req.user._id, {
      $push: { 'friendRequests.sent': { to: recipientId, status: 'pending' } }
    });

    await User.findByIdAndUpdate(recipientId, {
      $push: { 'friendRequests.received': { from: req.user._id, status: 'pending' } }
    });

    res.status(200).json({ success: true, message: 'Friend request sent' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.respondToFriendRequest = async (req, res) => {
  try {
    const { action } = req.body;
    const requestId = req.params.requestId;

    if (!['accept', 'reject'].includes(action)) {
      return res.status(400).json({ success: false, error: 'Invalid action' });
    }

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ success: false, error: 'User not found' });

    const request = user.friendRequests.received.id(requestId);
    if (!request) return res.status(404).json({ success: false, error: 'Request not found' });

    request.status = action === 'accept' ? 'accepted' : 'rejected';

    if (action === 'accept') {
      user.friends.addToSet(request.from);
      await User.findByIdAndUpdate(request.from, { $addToSet: { friends: user._id } });
    }

    await User.updateOne(
      { _id: request.from, 'friendRequests.sent.to': user._id },
      { $set: { 'friendRequests.sent.$.status': request.status } }
    );

    await user.save();
    res.status(200).json({ success: true, message: `Request ${action}ed`, data: request });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.viewSentRequests = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('friendRequests.sent.to', 'name profilePhoto email')
      .select('friendRequests.sent');

    res.status(200).json({ success: true, count: user.friendRequests.sent.length, data: user.friendRequests.sent });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.viewReceivedRequests = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('friendRequests.received.from', 'name profilePhoto email')
      .select('friendRequests.received');

    res.status(200).json({ success: true, count: user.friendRequests.received.length, data: user.friendRequests.received });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.removeFriend = async (req, res) => {
  try {
    const friendId = req.params.friendId;
    await User.findByIdAndUpdate(req.user._id, { $pull: { friends: friendId } });
    await User.findByIdAndUpdate(friendId, { $pull: { friends: req.user._id } });
    res.status(200).json({ success: true, message: 'Friend removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.viewMyFriends = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate({
        path: 'friends',
        select: 'name profilePhoto email skillsOffered skillsWanted availability',
        populate: [
          { path: 'skillsOffered', select: 'name description' },
          { path: 'skillsWanted', select: 'name description' }
        ]
      })
      .select('friends');

    if (!user) return res.status(404).json({ success: false, error: 'User not found' });
    res.status(200).json({ success: true, count: user.friends.length, data: user.friends });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.banUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { isBanned: true },
      { new: true }
    ).select('-password');

    if (!user) return res.status(404).json({ success: false, error: 'User not found' });
    res.status(200).json({ success: true, message: 'User banned', data: user });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.unbanUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { isBanned: false },
      { new: true }
    ).select('-password');

    if (!user) return res.status(404).json({ success: false, error: 'User not found' });
    res.status(200).json({ success: true, message: 'User unbanned', data: user });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.approveSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.skillId,
      { isApproved: true },
      { new: true }
    );

    if (!skill) return res.status(404).json({ success: false, error: 'Skill not found' });
    res.status(200).json({ success: true, message: 'Skill approved', data: skill });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.rejectSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.skillId,
      { isApproved: false },
      { new: true }
    );

    if (!skill) return res.status(404).json({ success: false, error: 'Skill not found' });
    res.status(200).json({ success: true, message: 'Skill rejected', data: skill });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};