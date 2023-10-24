import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface UserInterface extends Model {
  id: number;
  nome: string;
  email: string;
  fone: string;
  data_nascimento: string;
}

export const User = sequelize.define<UserInterface>(
  "User",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    fone: {
      type: DataTypes.STRING,
    },
    data_nascimento: {
      type: DataTypes.STRING,
    },
  },
  { tableName: "usuarios", timestamps: false }
);
