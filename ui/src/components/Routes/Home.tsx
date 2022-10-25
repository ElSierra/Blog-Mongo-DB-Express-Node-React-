import React from "react";
import Aside from "../Aside";
import Header from "../Header";
import Footer from "../Footer";
import Body from "../Body";
export const Home = (props: any) => {
  return (
    <div>
      <Aside />
      <Header />
      <Body setPage = {props.setPage}/>
      <Footer />
    </div>
  );
};
