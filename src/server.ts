import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

async function main() {
  mongoose.connect(process.env.DATABASE_URL as string);

  server = app.listen(process.env.PORT, () => {
    console.log(`Animal Sticker Server Running on port: ${process.env.PORT}`);
  });
}

main();
