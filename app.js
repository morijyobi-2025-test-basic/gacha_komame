import express from "express";
import gacha from "./gacha.js";

const app = express();
const port = 3000;

app.get("/gacha", (req, res) => {
  res.json({
    result: gacha(),
  });
});

export default app;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
