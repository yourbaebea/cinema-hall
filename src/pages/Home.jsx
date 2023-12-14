import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import home from '../styles/home.module.css';
import Query from "../information/Query";

const generateRandomPosition = () => {
  const imageWidth = 8 * window.innerWidth / 100; 
  const imageHeight = 20 * window.innerHeight / 100; 

  const newX = Math.random() * (window.innerWidth - imageWidth);
  const newY = Math.random() * (window.innerHeight - imageHeight);

  return [newX, newY];
};

const DraggableImage = ({ image }) => {
  const [isDragging, setDragging] = useState(false);
  const [{ xy }, set] = useSpring(() => ({
    xy: generateRandomPosition(),
    config: { tension: 150, friction: 100 },
  }));

  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const { clientX, clientY } = e;

      const imageWidth = 8 * window.innerWidth / 100; // 8vw
      const imageHeight = 20 * window.innerHeight / 100; // 20vh

      const newX = Math.min(Math.max(clientX - imageWidth / 2, 0), window.innerWidth - imageWidth);
      const newY = Math.min(Math.max(clientY - imageHeight / 2, 0), window.innerHeight - imageHeight);

      set({ xy: [newX, newY] });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const { clientX, clientY } = e;

        const imageWidth = 8 * window.innerWidth / 100; // 8vw
        const imageHeight = 20 * window.innerHeight / 100; // 20vh

        const newX = Math.min(Math.max(clientX - imageWidth / 2, 0), window.innerWidth - imageWidth);
        const newY = Math.min(Math.max(clientY - imageHeight / 2, 0), window.innerHeight - imageHeight);

        set({ xy: [newX, newY] });
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <animated.div
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
      }}
    >
      <img
        src={image.element}
        alt={`Image ${image.id}`}
        style={{ width: `${8}vw`, height: `${20}vh` }}
      />
    </animated.div>
  );
};

const Home = () => {
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  };

  const imagesHomepage = Query.queryHome() || [];

  console.log(imagesHomepage);

  return (
    <div className={home.page} style={{ overflow: 'hidden' }}>
      <div style={containerStyle}>
        {imagesHomepage.map(image => (<DraggableImage key={image.id} image={image} />))}
      </div>
    </div>
  );
};

export default Home;