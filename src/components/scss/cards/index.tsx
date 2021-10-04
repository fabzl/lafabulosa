import React from "react";

import styles from "./index.module.scss";
import data from "@public/meta.json";
import { Card } from "@components/scss";



export const Cards: React.FC = () => {
  return (
    <div className={styles.cards}>
      {(data?.plugins ?? []).map((plugin) => (
        <div key={`key-${plugin.name}`} className={ styles.cardWrapper +" "+ styles[plugin.cardtype]  }>    
          <Card title={plugin.name} button={plugin.button} hideName={plugin.hideName} url={plugin.url} videoUrl={plugin.videoUrl} description={plugin.description} cardtype={plugin.cardtype} background={plugin.background} poster={plugin.posterURL} children></Card>
        </div>
      ))}
    </div>
  );
};
