"use client";
import React from "react";
import { Button, Input } from "@repo/components";
import { useSignIn, useSignUp, useValidation, MESSAGE } from "@repo/shared";

export default function Home() {
  const { idTypeHandler, passwordTypeHandler } = useSignIn();

  return (
    <div className="text-3xl font-bold underline">
      <div>hi</div>
      <div>
        <Input />
      </div>
    </div>
  );
}
