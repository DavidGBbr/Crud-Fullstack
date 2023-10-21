"use client";
import Form from "@/components/Form";
import Grid from "@/components/Grid";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer, ToastContent } from "react-toastify";
import axios from "axios";
import { UserInterface } from "@/types/User";

const Page = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get<UserInterface[]>(
        "http://localhost:2000/api/"
      );
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error as ToastContent<unknown>);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <div className="w-full max-w-[800px] mt-5 flex flex-col items-center gap-2">
        <h2>USUÁRIOS</h2>
        <Form />
        <Grid users={users} />
      </div>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
};

export default Page;
