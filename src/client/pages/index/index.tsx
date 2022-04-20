import React from "react";
import { NextPage } from "next";
import { Button, Image } from "antd";

const IndexPage: NextPage = () => {
  return (
    <>
    <Image src="/static/avatar.jpg" />
    <h1 style={{textAlign: "center"}}>你好呀！</h1>
    <br></br>
      <Button loading>一个普通的按钮</Button>
    </>
  );
}

export default IndexPage;