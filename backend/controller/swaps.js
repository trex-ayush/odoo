const Swap = require('../models/Swap');
const User = require('../models/User');
const Skill = require('../models/Skill');

exports.createSwap = async (req, res) => {
  try {
    const { recipientId, offeredSkillId, requestedSkillId } = req.body;

    const [offeredSkill, requestedSkill] = await Promise.all([
      Skill.findById(offeredSkillId),
      Skill.findById(requestedSkillId)
    ]);

    if (!offeredSkill || !requestedSkill) {
      return res.status(404).json({ success: false, error: 'Skill not found' });
    }

    const recipient = await User.findById(recipientId);
    if (!recipient) {
      return res.status(404).json({ success: false, error: 'Recipient not found' });
    }

    const swap = await Swap.create({
      requester: req.user._id,
      recipient: recipientId,
      offeredSkill: offeredSkillId,
      requestedSkill: requestedSkillId,
      status: 'pending'
    });

    res.status(201).json({ success: true, data: swap });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.getMySwaps = async (req, res) => {
  try {
    const swaps = await Swap.find({
      $or: [{ requester: req.user._id }, { recipient: req.user._id }]
    })
      .populate('requester recipient', 'name profilePhoto')
      .populate('offeredSkill requestedSkill', 'name description');

    res.status(200).json({ success: true, count: swaps.length, data: swaps });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.respondToSwap = async (req, res) => {
  try {
    const { action } = req.body; // 'accept' or 'reject'
    const swap = await Swap.findById(req.params.id);

    if (!swap) {
      return res.status(404).json({ success: false, error: 'Swap not found' });
    }

    // Verify the user is the recipient
    if (swap.recipient.toString() !== req.user._id.toString()) {
      return res.status(401).json({ success: false, error: 'Not authorized' });
    }

    // Update status
    swap.status = action === 'accept' ? 'accepted' : 'rejected';
    await swap.save();

    res.status(200).json({ success: true, data: swap });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// rating for a completed swap
// api/swaps/:id/rate
exports.submitRating = async (req, res) => {
  try {
    const { rating, feedback, isRequester } = req.body;
    const swap = await Swap.findById(req.params.id);

    if (!swap) {
      return res.status(404).json({ success: false, error: 'Swap not found' });
    }

    if (swap.status !== 'completed') {
      return res.status(400).json({ success: false, error: 'Swap not completed' });
    }

    if (![swap.requester.toString(), swap.recipient.toString()].includes(req.user._id.toString())) {
      return res.status(401).json({ success: false, error: 'Not authorized' });
    }

    if (isRequester) {
      swap.requesterRating = { rating, feedback };
    } else {
      swap.recipientRating = { rating, feedback };
    }

    await swap.save();
    res.status(200).json({ success: true, data: swap });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.completeSwap = async (req, res) => {
  try {
    const swap = await Swap.findById(req.params.id);

    if (!swap) {
      return res.status(404).json({ success: false, error: 'Swap not found' });
    }

    if (![swap.requester.toString(), swap.recipient.toString()].includes(req.user._id.toString())) {
      return res.status(401).json({ success: false, error: 'Not authorized' });
    }

    swap.status = 'completed';
    await swap.save();

    res.status(200).json({ success: true, data: swap });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};