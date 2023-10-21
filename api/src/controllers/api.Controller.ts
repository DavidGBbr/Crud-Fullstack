import { Response, Request } from "express";
import { sequelize } from "../instances/mysql";
import { User } from "../models/user";

export const getUsers = async (_, res: Response) => {
  try {
    let users = await User.findAll({});
    return res.status(200).json(users);
  } catch (error) {
    console.log("Deu problema ao puxar os usuários: ", error);
  }
};
