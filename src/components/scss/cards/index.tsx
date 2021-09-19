import React from "react";

import styles from "./index.module.scss";
import data from "@public/meta.json";
import { Card } from "@components/scss";
//import Image from 'next/image';
function returnStyle (big:string) {
 let cardStyle = styles.cardWrapper
if (big === "big" ) {
  cardStyle = styles.cardWrapper +" "+ styles.big  
}
if (big === "tall" ) {
  cardStyle = styles.cardWrapper +" "+ styles.tall  
}

if (big === "big" ) {
  cardStyle = styles.cardWrapper +" "+ styles.big  
}
if (big === "tall big" ) {
  cardStyle = styles.cardWrapper +" "+ styles.tall +" "+ styles.big  
}

 return cardStyle

}

export const Cards: React.FC = () => {
  return (
    <div className={styles.cards}>
      {(data?.plugins ?? []).map((plugin) => (
        <div key={`key-${plugin.name}`} className={ returnStyle(plugin.size)  }>
        
          <Card title={plugin.name} vimeoUrl={plugin.vimeoUrl} description={plugin.description} background={plugin.background} ></Card>
        </div>
      ))}
    </div>
  );
};
