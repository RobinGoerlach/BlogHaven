import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/express-mongo", {});

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
