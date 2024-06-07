import Confetti from "react-confetti";
import React, { useState, useEffect } from 'react';

function Celebration() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
      <div>
        <Confetti width={windowSize.width} height={windowSize.height}/>
        <h2 style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            fontSize: '4em' // Cambia el tamaño del texto según lo necesites
          }}>
          You managed to hack us!
        </h2>
      </div>
    );
  }
export default Celebration;