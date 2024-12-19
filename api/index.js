import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

console.log("Server is starting");
console.log("Server is reading configuration");
dotenv.config();
const connetionstring = process.env.MONGODB;
console.log(
  "Server is reading configuration found Connection String: " + connetionstring
);

console.log("Server is opening database connection to remote MongoDB");
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Server is connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
