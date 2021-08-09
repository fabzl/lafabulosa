import React from "react";
import Image from "next/image";

import styles from "./index.module.scss";

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <a href="/img/logo_white_simple.svg" target="_blank">
        <Image
          src="/img/logo_white_simple.svg"
          alt="La Fabulosa"
          width="300px"
          height="auto"
        />
      </a>

      <div className={styles.x}>X</div>
      <div className={styles.icons}>
         
      <a href="tel:+56930965485" target="_blank">
          <Image
            src="/icons/whatsapp-icon.svg"
            alt="whatsapp"
            width="28"
            height="28"
          />
        </a>
        <a href="https://www.instagram.com/_la_fabulosa_" target="_blank"> 
          <Image
            src="/icons/instagram-icon.svg"
            alt="instagram"
            width="28"
            height="29"
          />
        </a>
        <a href="https://twitter.com/holalafabulosa1" target="_blank">
          <Image
            src="/icons/twitter-icon.svg"
            alt="twitter"
            width="28"
            height="28"
          />
        </a>

      

         <a href="https://www.linkedin.com/in/la-fabulosa-republica-de-la-montana/" target="_blank"> 
          <Image
            src="/icons/linkedin-icon.svg"
            alt="linkedin"
            width="28"
            height="32"
          />
        </a>
        <a
          href="https://www.youtube.com/c/fabianandrade"
          target="_blank"
        >
          <Image
            src="/icons/youtube-icon.svg"
            alt="youtube"
            width="28"
            height="29"
          />
        </a>
        <a
          href="https://www.facebook.com/la.fabulosa.republica.de.la.montana"
          target="_blank"
        >
          <Image
            src="/icons/facebook-icon.svg"
            alt="linkedin"
            width="28"
            height="32"
          />
        </a>
      </div>
      <div>
      <a class={styles.mailto} href="mailto:hola@lafabulosa.org" >hola@lafabulosa.org</a></div>
    </div>
  );
};
