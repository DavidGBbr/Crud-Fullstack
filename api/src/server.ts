import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRoutes from "./routes/api";

dotenv.config();

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.use("/api", apiRoutes);
server.use(express.json());

server.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint não encontrado." });
});

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
