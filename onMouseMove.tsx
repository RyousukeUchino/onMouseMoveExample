import React, { useState } from "react";

const MouseMoveExample = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = ({ clientX, clientY }) => {
    // clientX, clientYが取得出来るのでステートに保持する
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    // このDiv要素内でonMouseMoveイベントを利用する
    <div onMouseMove={handleMouseMove}>
      <div style={{width: '100%', height: '800px', border: '1px solid black'}}>
        {/* ステートに保持されているX,Y座標をスタイルで利用する */}
        <div id="mouse-stalker" style={{transform: 'translate(' + mousePosition.x + 'px, ' + mousePosition.y + 'px)'}}></div>
        Mouse position: ({mousePosition.x}, {mousePosition.y})
      </div>
    </div>
  );
};

export default MouseMoveExample;