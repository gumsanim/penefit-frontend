"use client";
import React from "react";
import { Button, Input } from "@repo/components";
import { useSignIn, useSignUp, useValidation, MESSAGE } from "@repo/shared";

export default function Home() {
  const { idTypeHandler, passwordTypeHandler } = useSignIn();

  return (
    <div>
      <div>{MESSAGE.ID}</div>
      <label htmlFor="id">아이디</label>
      <input name="id" onChange={idTypeHandler} />
      <label htmlFor="password">비밀번호</label>
      <input name="password" onChange={passwordTypeHandler} />
      <Button>하이</Button>
      <Input />
    </div>
  );
}
