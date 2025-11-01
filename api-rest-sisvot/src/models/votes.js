const mongoose = require("mongoose");

const votesSchema = new mongoose.Schema({

    voter_id: { type: mongoose.Schema.Types.ObjectId, ref: "voters" },
    candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: "candidates" }
   

});

module.exports = mongoose.model("votes", votesSchema)