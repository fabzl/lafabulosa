import React from "react";
import styles from "./index.module.scss";
import ReactPlayer from 'react-player'


export const Video: React.FC = (obj) => {
  let vimeoURL ='https://vimeo.com/'+obj.props
  console.dir(obj.props)
  return (
    <div className={styles.video}>
    
      <ReactPlayer
          url={vimeoURL} 
          className='react-player'
          width='100%'
          height='100%'
        />
    </div>
  );
};
