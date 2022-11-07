import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Form } from "./Form";
import Header from "./Header";
import NotSignedIn from "./NotSignedIn";
function Compose() {
  const [User, setUser] = useState<{ imageUrl: ""; name: ""; googleId: "" }>({
    imageUrl: "",
    name: "",
    googleId: "",
  });
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("dataKey") || "");
    if (items !== "") {
      setUser(items);
    }
  }, []);

  return (
    <div>
      {/* <div style= {{display: "none"}}>
      <NotSignedIn  updateProfileInfo = {updateProfileInfo} /></div> */}
      <Header />
      <Form
        name="Compose"
        imageUrl={User.imageUrl}
        uName={User.name}
        googleid={User.googleId}
      />
    </div>
  );
}
export default Compose;
