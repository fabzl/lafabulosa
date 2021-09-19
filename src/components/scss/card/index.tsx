import React from "react";
import styles from "./index.module.scss";
import Image from 'next/image';
import ReactPlayer from 'react-player'


type CardProps = {
  title: string;
  background: string;
  vimeoUrl: string;
  description: string; 
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, children, background, description, vimeoUrl }) => {
  return (
    <div className={styles.card}>
      
      {console.log(vimeoUrl)}
      { vimeoUrl !== "false" ?  
           <div>
             <ReactPlayer
               url={vimeoUrl} 
               className='react-player'
               width='100%'
               height='100%'
              controls={true}
        />
            <div className={styles.header}>{title}</div>
            </div> :
           <div>
            <Image className={styles.image} src={background}  alt={title} placeholder="blur" width="auto" height="auto" />
            <div className={styles.header}>{title}</div>
            <p>{description}</p>
            <div>{children}</div>
            </div>
      }
    </div>
  );
};
