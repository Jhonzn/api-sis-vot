const Candidates = require('../models/candidates.js');
const Voters = require('../models/voters.js');

class ValidationService {
  static async validateUniqueName(name, excludeId = null) {
    const [candidateExists, voterExists] = await Promise.all([
      Candidates.findOne({ 
        name: { $regex: new RegExp(`^${name}$`, 'i') },
        ...(excludeId && { _id: { $ne: excludeId } })
      }),
      Voters.findOne({ 
        name: { $regex: new RegExp(`^${name}$`, 'i') },
        ...(excludeId && { _id: { $ne: excludeId } })
      })
    ]);

    if (candidateExists || voterExists) {
      throw new Error(`El nombre "${name}" ya existe en ${candidateExists ? 'candidatos' : 'votantes'}`);
    }

    return true;
  }
}

module.exports = { ValidationService };