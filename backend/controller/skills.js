const Skill = require('../models/Skill');

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().populate('createdBy', 'name');
    res.status(200).json(skills);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id).populate('createdBy', 'name');
    if (!skill) return res.status(404).json({ error: 'Skill not found' });
    res.status(200).json(skill);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createSkill = async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const { name, description } = req.body;
    const existingSkill = await Skill.findOne({ name });
    if (existingSkill) {
      return res.status(400).json({ error: 'Skill already exists' });
    }

    const skill = await Skill.create({
      name,
      description,
      createdBy: req.user.id
    });

    res.status(201).json(skill);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateSkill = async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const { name, description } = req.body;
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ error: 'Skill not found' });

    skill.name = name || skill.name;
    skill.description = description || skill.description;
    await skill.save();

    res.status(200).json(skill);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ error: 'Skill not found' });

    await skill.deleteOne();
    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};