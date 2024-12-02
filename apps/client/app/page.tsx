"use client";
import React from "react";
import { Button, Input } from "@repo/components";
import { useSignIn } from "@repo/shared";

export default function Home() {
  const { id, password, idTypeHandler, passwordTypeHandler } = useSignIn();

  return (
    <div className="bg-gray-200">
      <div className="text-3xl font-bold underline">Hello world!</div>
      <Input value={id} onChange={idTypeHandler} />
      <Input value={password} onChange={passwordTypeHandler} />
    </div>
  );
}
