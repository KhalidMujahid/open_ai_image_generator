const { Router } = require("express");
const { generate,chat } = require("../controllers/openai.controller");

const router = Router();

router.post("/", generate);

router.post("/chat", generate);

module.exports = router;
