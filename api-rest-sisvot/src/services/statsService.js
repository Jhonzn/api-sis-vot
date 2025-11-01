const Votes = require('../models/votes.js');
const Voters = require('../models/voters.js');
const Candidates = require('../models/candidates.js');

class StatsService {
  static async getStats() {
    const [candidates, totalVoters, totalVotes] = await Promise.all([
      Candidates.find().select('nombre party votes'), 
      Voters.countDocuments(),
      Votes.countDocuments()
    ]);

    console.log('📊 Stats - Candidatos:', candidates.length);
    console.log('📊 Stats - Total votantes:', totalVoters);
    console.log('📊 Stats - Total votos:', totalVotes);

    const candidatesWithPercentage = candidates.map(candidate => {
      console.log(`📊 Candidato ${candidate.nombre}: votes=${candidate.votes}`);
      
      const percentage = totalVotes > 0 
        ? ((candidate.votes / totalVotes) * 100).toFixed(2) 
        : '0.00';

      return {
        ...candidate.toObject(),
        percentage: percentage
      };
    });

    return {
      candidates: candidatesWithPercentage,
      total_voters: totalVoters,
      total_votes: totalVotes,
      participation_percentage: totalVoters > 0 
        ? ((totalVotes / totalVoters) * 100).toFixed(2)
        : '0.00'
    };
  }
}

module.exports = { StatsService };