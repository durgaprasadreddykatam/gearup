import React, { useState, useEffect } from 'react';

const Button = ({ isActive, onClick }) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setRotationAngle(prevAngle => prevAngle + 30);
      }, 50);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  return (
    <>
      <button className="bg-blue-600 h-12 w-40 rounded-xl flex items-center justify-center" onClick={onClick}>
        <div className={`w-10 h-10 border-t-white border-t-2 rounded-full transform ${isActive ? 'rotate-0 transition-transform duration-5' : ''}`} style={{ transform: `rotate(${rotationAngle}deg)` }}></div>
      </button>
    </>
  )
}

export default Button;
