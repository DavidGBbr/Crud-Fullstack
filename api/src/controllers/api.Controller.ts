import { Response, Request } from "express";
import { User } from "../models/user";

export const getUsers = async (_: any, res: Response) => {
  try {
    let users = await User.findAll({});
    return res.status(200).json(users);
  } catch (error) {
    console.log("Deu problema ao puxar os usuários: ", error);
  }
};

export const addUser = async (req: Request, res: Response) => {
  if (req.body.nome) {
    let newTodo = await User.create({
      nome: req.body.nome,
      email: req.body.email,
      fone: req.body.fone,
      data_nascimento: req.body.data_nascimento,
    });
    res.status(201).json({ item: newTodo });
  } else {
    res.json({ error: "Dados não enviados." });
  }
};
