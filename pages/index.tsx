import React from "react";

import { Header, Main, Cards, Footer } from "@components/scss";

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
   <div>   <iframe src="https://player.vimeo.com/video/593952509?h=193da2e32f" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/593952509">La Fabulosa Rep&uacute;blica de la Monta&ntilde;a</a> from <a href="https://vimeo.com/fabzfabzfabz">La Fabulosa</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
</div>
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
