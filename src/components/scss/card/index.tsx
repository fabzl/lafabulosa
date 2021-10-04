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
  hideName: boolean;
  button: string;
};

export const Card: React.FC<CardProps> = ({ title, children, url, background, description, poster, cardtype, videoUrl, hideName, button }) => {
  
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }

  
  return (
    <div className={styles.card +" "+ cardtype} style={{backgroundImage: "url("+background+")"}} >

      { videoUrl !== "false" ?  
          <div className={styles.container}   >
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
            
              {  poster ?        <Image className={styles.poster} src={poster}  layout='fill' alt={title} placeholder="blur" /> : ""}
              {  !hideName ?     <h2>{title}</h2>: "" }
              {  description ?   <p>{description}</p>: "" }
              {  button ?        <div><Link href={url}> <div>{button}</div> </Link></div>: "" }
            </div>
             
          </div> :
            
          <div onClick={toggle} style={{
            transform: showMe?"translateY(-100%)":"translateY(0%)"
          }} className={styles.containercover}>

              <div className={styles.coverimage} >
                <Image className={styles.image} src={poster}  alt={title} placeholder="blur" layout='fill' /> 
              </div>
              <div className={styles.content}>
                <div className={styles.header}>{title}</div>
                <p>{description}</p>
              </div>          
            </div>


      }
     
    </div>
  );
};
