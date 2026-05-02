const express = require("express");
const router = express.Router();

const dataController = require("../controllers/dataController");

router.post("/process-data", dataController.processData);

router.post("/schedule-service", dataController.scheduleService);

module.exports = router;