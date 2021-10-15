import React from "react";

import { Header, Main, Cards, Footer, GetInTouch } from "@components/scss";


const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: "100vh",
      }}
    >
    <Header />
      <Main /> 
      <GetInTouch /> 
      <Cards />
      <Footer /> 
    </div>
  );
};

export default Home;
