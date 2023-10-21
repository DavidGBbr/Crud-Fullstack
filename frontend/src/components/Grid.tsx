import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { UserInterface } from "@/types/User";

interface Props {
  users: UserInterface[];
}

const Grid = ({ users }: Props) => {
  return (
    <table className="w-full bg-white shadow-md rounded-md max-w-[700px] m-5 mx-auto break-all">
      <thead>
        <tr>
          <th className="text-start border-b p-2">Nome</th>
          <th className="text-start border-b p-2">Email</th>
          <th className="text-start border-b p-2 hidden sm:block">Fone</th>
          <th className="border-b"></th>
          <th className="border-b"></th>
        </tr>
      </thead>
      <tbody>
        {users?.map((item, i) => (
          <tr key={i}>
            <td className="w-30% p-5">{item.nome}</td>
            <td className="w-30% p-5">{item.email}</td>
            <td className="w-20% p-5 hidden sm:block">{item.fone}</td>
            <td className="w-5% p-5 text-center">
              <FaEdit />
            </td>
            <td className="w-5% p-5 text-center">
              <FaTrash />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
