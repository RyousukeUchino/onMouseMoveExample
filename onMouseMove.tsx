import React, { useState } from "react";

const MouseMoveExample = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <div style={{width: '100%', height: '800px', border: '1px solid black'}}>
        <div id="mouse-stalker" style={{transform: 'translate(' + mousePosition.x + 'px, ' + mousePosition.y + 'px)'}}></div>
        Mouse position: ({mousePosition.x}, {mousePosition.y})
      </div>
    </div>
  );
};

export default MouseMoveExample;