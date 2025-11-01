const Votes = require('../models/votes.js');
const Voters = require('../models/voters.js');
const Candidates = require('../models/candidates.js');

class VotingService {
  static async processVote(voteData) {
    const { idVoter, idCandidate } = voteData;

    const existingCandidate = await Candidates.findById(idCandidate);
    
    if (!existingCandidate) throw new Error('El candidato no existe');

    const existingVoter = await Voters.findById(idVoter);
    
    if (!existingVoter) throw new Error('Este votante no existe');

    // Verificar si ya votó
    const existingVote = await Votes.findOne({ idVoter });

    if (existingVote) throw new Error('Este votante ya ha votado');

    

    // 1. Crear voto
    const vote = await Votes.create({ idVoter, idCandidate });

    // 2. Actualizar votante (paralelo)
    await Voters.findByIdAndUpdate(idVoter, { has_voted: true });

    // 3. Incrementar votos del candidato (paralelo)
    await Candidates.findByIdAndUpdate(idCandidate, { $inc: { votes: 1 } });

    return vote;
  }
}

module.exports = { VotingService };