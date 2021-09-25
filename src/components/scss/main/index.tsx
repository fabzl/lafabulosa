import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

export const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <Image className="logo" src="/img/logo_white.svg" alt="la fabulosa" width="750px" height="600px" />
      <h1>La Fabulosa República de la Montaña para los amigos ! </h1>
  {/* //    <Image className={styles.logoArs} src="/img/logo_ars_electronica.svg" alt="ars electronica" width="auto" height="auto" /> */}
    </div>
  );
};

