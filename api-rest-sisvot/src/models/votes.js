const mongoose = require("mongoose");

const votesSchema = new mongoose.Schema({

    idVoter: { type: mongoose.Schema.Types.ObjectId, ref: "voters" },
    idCandidate: { type: mongoose.Schema.Types.ObjectId, ref: "candidates" }
   

});

module.exports = mongoose.model("votes", votesSchema)