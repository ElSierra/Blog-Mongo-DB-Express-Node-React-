import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "./Form";
function Compose() {
  const { state } = useLocation();
  const { imageUrl, name } = state;
  return <Form name="Compose" imageUrl={imageUrl} uName={name} />;
}
export default Compose;
