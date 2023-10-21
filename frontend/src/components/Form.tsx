import React, { useRef } from "react";

const Form = () => {
  const ref = useRef();

  return (
    <form
      ref={ref}
      className="flex items-end gap-2 flex-wrap bg-white p-5 shadow-md rounded-md"
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
