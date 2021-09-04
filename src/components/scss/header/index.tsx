import React from "react";
import styles from "./index.module.scss";
import Link from 'next/link'

import { Logo } from "@components/scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Logo />
   {/*     <Link href="/">Home</Link>
       <Link href="/orchestra">Non emotional Orquestra</Link>
        <Link href="/cooking">Cooking for freedom</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/cooking">About</Link>
        <Link href="/causes">causes</Link> */}
    </div>
  );
};
