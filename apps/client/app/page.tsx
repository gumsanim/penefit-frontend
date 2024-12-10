import React from "react";
import { Banner, Header, Input, Wrapper, Row, Typo } from "@repo/components";
import { Lens } from "@repo/components";

export default function Home() {
  console.log(Lens);
  return (
    <>
      <Lens />
      <Banner />
      <Header></Header>
      <Banner />
      <Wrapper>
        <div>wrapper</div>
      </Wrapper>
      <Row>
        <Row.Box>
          <Row.Item>아아</Row.Item>
          <Row.Item>아아</Row.Item>
          <Row.Item>아아아아</Row.Item>
        </Row.Box>
        <Row.Box>
          <Row.Item>아아</Row.Item>
          <Row.Item>아아</Row.Item>
          <Row.Item>아아아아</Row.Item>
        </Row.Box>
      </Row>
      <Typo className="body2">타이포</Typo>
    </>
  );
}
