import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRoutes from "./routes/api";

dotenv.config();

const server = express();
server.use(cors());

server.use("/api", apiRoutes);
server.use(express.json());

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrado." });
});

server.listen(process.env.PORT);
