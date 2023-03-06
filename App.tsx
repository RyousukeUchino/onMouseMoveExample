import * as React from 'react';
import MouseMoveExample from './onMouseMove';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>マウスイベントの実装例！</h1>
      <p>下のエリア内でマウスカーソルを移動させると後ろにドットがついてきます！</p>
      <MouseMoveExample />
    </div>
  );
}
