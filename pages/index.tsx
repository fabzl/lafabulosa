import React from "react";

import { Header, Main, Cards, Footer, Video } from "@components/scss";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Main />
      <Video props="593952509" />
      <Video props="594364233" />
      <Video props="593578556" />
      <Video props="596517235" />
      <Video props="595974996" />
      <Video props="596017591" />

      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
