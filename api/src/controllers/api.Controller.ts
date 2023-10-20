import { Response, Request } from "express";
import { sequelize } from "../instances/mysql";

export const testController = async (req: Request, res: Response) => {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso!");
  } catch (error) {
    console.log("Deu problema: ", error);
  }
};
