import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileUploader } from "./app/helpers/fileUploader";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import { animalStickerController } from "./app/modules/controller/animalSticker";
import { categoryController } from "./app/modules/controller/category";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const animalRouter = express.Router();
const categoryRouter = express.Router();

app.use("/api/v1/animal", animalRouter);
app.use("/api/v1/category", categoryRouter);

animalRouter.post(
  "/create",
  fileUploader.upload.single("file"),
  animalStickerController.createAnimalSticker
);

categoryRouter.post("/create", categoryController.createCategory);

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
    error: [{ path: req.originalUrl, message: "Route Not Found" }],
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
