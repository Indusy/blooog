import React, { useRef, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch, useHistory } from "react-router-dom";
import { SProps } from "ssr-types-react";
import Login from "./login";

export default (props: SProps) => {
  const myRef = useRef(null);
  const [formValue, setFormValue] = useState(114514)
  
  const handleTyping = () => {
    setFormValue(formValue + 1)
  }

  const divClickHandler = () => {
    console.log(myRef);
    
  }
  const history = useHistory();
  return (
    <>
      <Route path="/admin/login" component={Login} />
      {/* <Redirect to={"/admin"} /> */}
    </>
  );
};
