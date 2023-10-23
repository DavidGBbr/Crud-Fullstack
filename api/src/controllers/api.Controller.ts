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
  const { nome, email, fone, data_nascimento } = req.body;
  if (req.body.nome) {
    await User.create({
      nome,
      email,
      fone,
      data_nascimento,
    });
    res.status(201).json({ status: "Usuário criado com sucesso!" });
  } else {
    res.json({ error: "Dados não enviados." });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  let user = await User.findByPk(id);
  const { nome, email, fone, data_nascimento } = req.body;
  if (user) {
    user.nome = nome;
    user.email = email;
    user.fone = fone;
    user.data_nascimento = data_nascimento;
    await user.save();
    res.json(user);
  } else {
    res.json({ error: "Usuário não encontrado." });
  }
};
