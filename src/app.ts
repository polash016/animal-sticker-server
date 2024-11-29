import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const animalRouter = express.Router();
const categoryRouter = express.Router();

app.use("/api/v1/animal", animalRouter);
app.use("/api/v1/category", categoryRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
