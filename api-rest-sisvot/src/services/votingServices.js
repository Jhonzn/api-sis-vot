const Votes = require('../models/votes.js');
const Voters = require('../models/voters.js');
const Candidates = require('../models/candidates.js');

class VotingService {
  static async processVote(voteData) {
    const { voter_id, candidate_id } = voteData;

    const existingCandidate = await Candidates.findById(candidate_id);
    
    if (!existingCandidate) throw new Error('El candidato no existe');

    const existingVoter = await Voters.findById(voter_id);
    
    if (!existingVoter) throw new Error('Este votante no existe');

    // Verificar si ya votó
    const existingVote = await Votes.findOne({ voter_id });

    if (existingVote) throw new Error('Este votante ya ha votado');

    

    // 1. Crear voto
    const vote = await Votes.create({ voter_id, candidate_id });

    // 2. Actualizar votante (paralelo)
    await Voters.findByIdAndUpdate(voter_id, { has_voted: true });

    // 3. Incrementar votos del candidato (paralelo)
    await Candidates.findByIdAndUpdate(candidate_id, { $inc: { votes: 1 } });

    return vote;
  }
}

module.exports = { VotingService };