import React from "react";
import { NextPage } from "next";
import { Button } from "antd";

const IndexPage: NextPage = () => {
  return (
    <>
    <h1 style={{textAlign: "center"}}>你好呀！</h1>
    <br></br>
      <Button loading>一个普通的按钮</Button>
    </>
  );
}

export default IndexPage;