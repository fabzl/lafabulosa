import React from "react";
import styles from "./index.module.scss";
import { Button } from "@components/scss";
import Image from "next/image";

export const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <Image src="/img/logo_white.svg" alt="la fabulosa" width="896" height="158" />
      <h1>la fabulosa para los amigos ! </h1>
      <p>A collaborative corporation for the new world</p>
      <Button>Read More</Button>
    </div>
  );
};
