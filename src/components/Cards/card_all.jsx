import React, { useState } from 'react';
import './card_all.css'; // Import your CSS file

const Card = ({ dataImage,name }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  let mouseLeaveDelay = null;

  const handleMouseMove = (e) => {
    setMouseX(e.pageX - e.currentTarget.offsetLeft - width / 2);
    setMouseY(e.pageY - e.currentTarget.offsetTop - height / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    mouseLeaveDelay = setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
  };

  const cardStyle = {
    transform: `rotateY(${(mouseX / width) * 0}deg) rotateX(${(mouseY / height) * 0}deg)`
  };

  const cardBgTransform = {
    transform: `translateX(${(mouseX / width) * -10}px) translateY(${(mouseY / height) * -10}px)`
  };

  const cardBgImage = {
    backgroundImage: `url(${dataImage})`
  };

  return (
    <div className="card-wrap" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="card" style={cardStyle} ref={(ref) => { if (ref) { setWidth(ref.offsetWidth); setHeight(ref.offsetHeight); } }}>
        <div className="card-bg" style={{ ...cardBgTransform, ...cardBgImage }}></div>
        <div className="card-info">
          <h2 className="header">{name}</h2>
          <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

const Cards_return = () => {
  return (
    <div id="app" className="container">
      <Card dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=" name="Heart Rate" />
      <Card dataImage="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" name="Step Count"/>
      <Card dataImage="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" name="Sleep" />
      <Card dataImage="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=" name="Calories"/>
    </div>
  );
};

export default Cards_return;
