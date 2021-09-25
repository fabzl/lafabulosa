import React from "react";
import styles from "./index.module.scss";
import Image from 'next/image';
import ReactPlayer from 'react-player'
import { useState } from "react"
import Link from 'next/link'


type CardProps = {
  title: string;
  background: string;
  videoUrl: string;
  description: string; 
  poster: string; 
  cardtype:  string; 
  url: string; 
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, children, url, background, description, poster, cardtype, videoUrl }) => {
  
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  
  return (
    <div className={styles.card +" "+ cardtype  }>

      { videoUrl !== "false" ?  
          <div className={styles.container}>
             <div className={styles.player}>
             <ReactPlayer
               url={videoUrl} 
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
            
           <div onClick={toggle} style={{
            transform: showMe?"translateY(-100%)":"translateY(0%)"
          }} className={styles.containercover}>

              <div className={styles.coverimage} >
                <Image className={styles.image} src={background}  alt={title} placeholder="blur" width="1920px" height="1080px" />
                <div className={styles.header}>{title}</div>
                <p>{description}</p>
                <div>{children}</div>
              </div>
              <div className={styles.content}>
              
              </div>

          
            </div>

      }
        { url !== "false" ?     
              <Link href="/blog/hello-world">
                     <a>{url}</a>
              </Link> : ""
            }
    </div>
  );
};
