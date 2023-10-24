import { Response, Request } from "express";
import { User } from "../models/user";

export const getUsers = async (_: Request, res: Response) => {
  try {
    const users = await User.findAll({});
    res.status(200).json(users);
  } catch (error) {
    console.log("Deu problema ao puxar os usuários: ", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const { nome, email, fone, data_nascimento } = req.body;

  if (!nome) {
    res.status(400).json({ error: "Campo 'nome' é obrigatório." });
    return;
  }

  try {
    const newUser = await User.create({
      nome,
      email,
      fone,
      data_nascimento,
    });

    res
      .status(201)
      .json({ status: "Usuário criado com sucesso!", user: newUser });
  } catch (error) {
    console.log("Erro ao criar usuário: ", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const user = await User.findByPk(id);

  if (!user) {
    res.status(404).json({ error: "Usuário não encontrado." });
    return;
  }

  const { nome, email, fone, data_nascimento } = req.body;

  user.nome = nome;
  user.email = email;
  user.fone = fone;
  user.data_nascimento = data_nascimento;

  try {
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.log("Erro ao atualizar usuário: ", error);
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const user = await User.findByPk(id);

  if (!user) {
    res.status(404).json({ error: "Usuário não encontrado." });
    return;
  }

  try {
    await user.destroy();
    res.status(200).json({ status: "Usuário deletado com sucesso!" });
  } catch (error) {
    console.log("Erro ao deletar usuário: ", error);
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
};
