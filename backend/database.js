// backend/database.js
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { config } from "./src/config.js";

// 1. Conectar a MongoDB
mongoose
  .connect(config.db.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB is connected"))
  .catch((err) => console.error("DB connection error:", err));

// 2. Escuchar eventos de la conexión
const connection = mongoose.connection;

connection.on("disconnected", () => {
  console.log("DB is disconnected");
});

connection.on("error", (err) => {
  console.error("DB error:", err);
});
