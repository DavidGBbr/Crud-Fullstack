import { UserInterface } from "@/types/User";
import { api } from "@/utils/api";
import React, { FormEvent, useEffect, useRef } from "react";
import { toast } from "react-toastify";

interface Props {
  onEdit: UserInterface | null;
  setOnEdit: React.Dispatch<React.SetStateAction<null>>;
  getUsers: () => Promise<void>;
}

const Form = ({ getUsers, onEdit, setOnEdit }: Props) => {
  const ref = useRef<HTMLFormElement>(null!);

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;
      if (user) {
        user.nome.value = onEdit.nome;
        user.email.value = onEdit.email;
        user.fone.value = onEdit.fone;
        user.data_nascimento.value = onEdit.data_nascimento;
      }
    }
  }, [onEdit]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const user = ref.current;

    if (!user) {
      return false;
    }

    const { nome, email, fone, data_nascimento } = user;

    if (!nome.value || !email.value || !fone.value || !data_nascimento.value) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      if (onEdit) {
        const response = await api.put(`/update/${onEdit.id}`, {
          nome: nome.value,
          email: email.value,
          fone: fone.value,
          data_nascimento: data_nascimento.value,
        });
        toast.success(response.data);
      } else {
        const response = await api.post(`/add`, {
          nome: nome.value,
          email: email.value,
          fone: fone.value,
          data_nascimento: data_nascimento.value,
        });
        toast.success(response.data);
      }

      user.nome.value = "";
      user.email.value = "";
      user.fone.value = "";
      user.data_nascimento.value = "";

      setOnEdit(null);
      getUsers();
    } catch (error) {
      toast.error(error as any);
    }
  };

  return (
    <form
      ref={ref}
      className="flex items-end gap-2 flex-wrap bg-white p-5 shadow-md rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label>Nome</label>
        <input
          name="nome"
          className="w-32 px-2 border border-gray-300 rounded-5 h-10"
        />
      </div>
      <div className="flex flex-col">
        <label>E-mail</label>
        <input
          name="email"
          type="email"
          className="w-32 px-2 border border-gray-300 rounded-5 h-10"
        />
      </div>
      <div className="flex flex-col">
        <label>Telefone</label>
        <input
          name="fone"
          className="w-32 px-2 border border-gray-300 rounded-5 h-10"
        />
      </div>
      <div className="flex flex-col">
        <label>Data de Nascimento</label>
        <input
          name="data_nascimento"
          type="date"
          className="w-32 px-2 border border-gray-300 rounded-5 h-10"
        />
      </div>
      <button
        type="submit"
        className="p-2 cursor-pointer rounded-md bg-[#2c73d2] text-white h-10"
      >
        SALVAR
      </button>
    </form>
  );
};

export default Form;
