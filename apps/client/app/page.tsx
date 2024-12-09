import React from "react";
import { Banner, Header, Input, Wrapper, Row } from "@repo/components";
import { Lens } from "@repo/components";

export default function Home() {
  console.log(Lens);
  return (
    <>
      <Lens />
      <Banner />
      <Header></Header>
      <Banner />
      <Wrapper className="xy_center">
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
    </>
  );
}
