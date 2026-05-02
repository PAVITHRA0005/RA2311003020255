const express = require("express");
const app = express();

const logger = require("../../logging_middleware/logger");

app.use(express.json());
app.use(logger);

app.post("/test", (req, res) => {
    res.json({ message: "Test route working" });
});

app.use("/api", require("./routes/dataRoutes"));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});