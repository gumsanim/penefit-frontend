"use client";
import React from "react";
import { Banner, Header, Input, Wrapper } from "@repo/components";
import { Lens } from "@repo/components";

export default function Home() {
  console.log(Lens);
  return (
    <>
      <Lens />
      <Header></Header>
      <Banner />
      <Wrapper className="xy_center">
        <div>wrapper</div>
      </Wrapper>
    </>
  );
}
