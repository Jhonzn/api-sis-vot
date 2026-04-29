const { ValidationService } = require('../services/validationService.js');
const voter = require("../models/voters");

exports.registerVoter = async (req, res) => {

  try {
    const { name, email, cedula } = req.body;

    const voterExist = await voter.findOne({ email });

    if (voterExist) return res.status(400).json({ msg: "Votante ya existe" });

    await ValidationService.validateUniqueName(name);

    const newVoter = await voter.create({ name, email, cedula });

    res.status(201).json({ msg: "Votante creado", user: newVoter });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}
exports.obtVoters = async (req, res) => {
  try {

    const getVoters = await voter.find();
    if (!getVoters || getVoters.length === 0) {
      return res.status(400).json({ success: false, message: "Votantes no encontrados" })
    }
    res.json(getVoters);

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}

exports.obtDetVoter = async (req, res) => {
  try {
    const { idVoter } = req.params;

    const voters = await voter.findById(idVoter).select("name email has_voted");

    res.json(voters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener los detalles del votante" });
  }
};

exports.deleteVoter = async (req, res) => {
  try {
    const { idVoter } = req.params;

    const delVoter = await voter.findByIdAndDelete(idVoter);

    if (!delVoter) {
      return res.status(404).json({ success: false, message: "Votante no encontrado" });
    }
    res.json({ success: true, message: "Votante eliminado" });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};



exports.getVoters = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const name = req.query.name || "";

    const filter = {};

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    const voters = await voter.find(filter)
      .skip(skip)
      .limit(limit);

    const total = await voter.countDocuments(filter);

    res.json({
      success: true,
      data: voters,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

