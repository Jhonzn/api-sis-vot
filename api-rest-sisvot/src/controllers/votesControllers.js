const { VotingService } = require('../services/votingServices.js');
const { StatsService } = require('../services/statsService.js');
const votes = require("../models/votes.js");

exports.votar = async (req, res) => {
    try {

        const { idVoter, idCandidate } = req.body;
    
        const vote = await VotingService.processVote({ idVoter, idCandidate });
        
        res.status(201).json({
            success: true,
            data: vote,
            message: 'Voto registrado exitosamente'
        });
        
    } catch (err) {

        res.status(500).json({ msg: err.message }); 
    }
}

exports.getVotes = async (req, res) => {
  try {
    const votess = await votes.find()
      .populate('idCandidate', 'nombre party')
      .populate('idVoter', 'nombre email')

    res.json({
      success: true,
      data: votess,
      count: votess.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

exports.getStats = async (req, res) => {
  try {
    const stats = await StatsService.getStats();
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
