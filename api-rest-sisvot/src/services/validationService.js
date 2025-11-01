const Candidates = require('../models/candidates.js');
const Voters = require('../models/voters.js');

class ValidationService {
  static async validateUniqueName(nombre, excludeId = null) {
    const [candidateExists, voterExists] = await Promise.all([
      Candidates.findOne({ 
        nombre: { $regex: new RegExp(`^${nombre}$`, 'i') },
        ...(excludeId && { _id: { $ne: excludeId } })
      }),
      Voters.findOne({ 
        nombre: { $regex: new RegExp(`^${nombre}$`, 'i') },
        ...(excludeId && { _id: { $ne: excludeId } })
      })
    ]);

    if (candidateExists || voterExists) {
      throw new Error(`El nombre "${nombre}" ya existe en ${candidateExists ? 'candidatos' : 'votantes'}`);
    }

    return true;
  }
}

module.exports = { ValidationService };