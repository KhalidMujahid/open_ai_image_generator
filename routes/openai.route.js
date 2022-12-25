const { Router } = require("express");
const { generate } = require("../controllers/openai.controller");

const router = Router();

router.post("/", generate);

module.exports = router;
