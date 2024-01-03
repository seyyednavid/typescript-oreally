
import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello from Express with TypeScript and Nodemon and ts-node!!!");
});

app.listen(8080, () => {
  console.log(`Server is listening on port 8080 `);
});
