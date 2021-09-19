import React from "react";
import styles from "./index.module.scss";
import Image from 'next/image';
import ReactPlayer from 'react-player'
import { useState } from "react"


type CardProps = {
  title: string;
  background: string;
  vimeoUrl: string;
  description: string; 
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, children, background, description, vimeoUrl }) => {
  
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  
  return (
    <div className={styles.card}>
      
      {console.log(vimeoUrl)}
      { vimeoUrl !== "false" ?  
          <div className={styles.container}>
             <div className={styles.player}>
             <ReactPlayer
               url={vimeoUrl} 
               className='react-player'
               width='100%'
               height='100%'
               controls={true}
        />
            </div>
             <div className={styles.sideheader}>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div> :
           <div   onClick={toggle} style={{
            transform: showMe?"translateY(-100%)":"translateY(0%)"
          }}  className={styles.containercover}>

              <div className={styles.coverimage} >
                <Image className={styles.image} src={background}  alt={title} placeholder="blur" width="600px" height="600px" />
                <div className={styles.header}>{title}</div>
                <p>{description}</p>
                <div>{children}</div>
              </div>
              <div className={styles.content}>
              
              </div>


            </div>

      }
    </div>
  );
};
