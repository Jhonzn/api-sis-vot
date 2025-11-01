const express = require("express");
const router = express.Router();
const { registerVoter, obtVoters, obtDetVoter, deleteVoter } = require("../controllers/votersControllers");
const { authenticateToken } = require("../middleware/auth");

router.post("/registerVoter", authenticateToken, registerVoter);
router.get("/obtVoters", authenticateToken, obtVoters);
router.get("/obtDetVoter/:idVoter", authenticateToken, obtDetVoter);
router.delete("/deleteVoter/:idVoter", authenticateToken, deleteVoter);

module.exports = router;