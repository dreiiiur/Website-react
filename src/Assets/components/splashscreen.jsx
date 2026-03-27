import React from 'react';
import logo from '../images/splashlogo.png';

const Splashscreen = () => {
  const styles = `
    @keyframes splashAnimation {
      0% {
        opacity: 0;
        transform: rotateY(-90deg) scale(0.3);
      }
      50% {
        opacity: 1;
        transform: rotateY(0deg) scale(1.1);
      }
      100% {
        opacity: 1;
        transform: rotateY(0deg) scale(1);
      }
    }
    .splash-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: #333333;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      perspective: 1000px;
      @media (max-width: 768px) {
        background: #333;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
    }
    .logo {
      width: 400px;
      height: auto;
      animation: splashAnimation 3s ease-in-out forwards;
      transform-style: preserve-3d;
      backface-visibility: hidden;
      @media (max-width: 768px) {
        width: 300px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="splash-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </>
  );
};

export default Splashscreen;