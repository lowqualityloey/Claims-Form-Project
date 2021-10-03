require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morganBody = require("morgan-body");
const formRouter = require("./routes/form-router");
const claimRouter = require("./routes/submit-claim");

app.use(cors());
app.use(express.json());

morganBody(app);

app.use("/api/form", formRouter);
app.use("/api/claims", claimRouter);

const PORT = process.env.EXPRESS_PORT || 5000;
app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
