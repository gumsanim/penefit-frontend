import React, { useState } from "react";

type TypeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

const useSignIn = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const idTypeHandler: TypeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setId(value);
  };

  const passwordTypeHandler: TypeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setPassword(value);
  };

  return {
    id,
    password,
    idTypeHandler,
    passwordTypeHandler,
  };
};

export default useSignIn;
