const { ValidationService } = require('../services/validationService.js');
const cadidate = require("../models/candidates");

exports.registerCandidate = async (req, res) => {

    try {
        const { name, party } = req.body;

        await ValidationService.validateUniqueName(name);

        const newCandi = await cadidate.create({ name, party });

        res.status(201).json({ msg: "Candidato creado", user: newCandi });
        
    } catch (err) {
        res.status(500).json({ msg: err.message });   
    }
}
exports.obtCandidates = async (req, res) => {
    try {

        const getCandi = await cadidate.find();
        if (!getCandi) {
            return res.status(400).json({success: false, message: "Candidatos no encontrados"})    
        }
        res.json(getCandi);
        
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

exports.obtDetCandi = async (req, res) => {
  try {
    const { idCandidate } = req.params;

    const candid = await cadidate.find({ _id: idCandidate })
      .populate("_id", "name party votes"); 

    res.json(candid);
  } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al obtener los detalles del candidato" });
  }
};

exports.deleteCandi = async (req, res) => {
  try {
    const { idCandidate } = req.params;

    const delCandi = await cadidate.findByIdAndDelete(idCandidate);

    if (!delCandi) {
      return res.status(404).json({ success: false, message: "Candidato no encontrado" });
    }
    res.json({ success: true, message: "Candidato eliminado" });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};