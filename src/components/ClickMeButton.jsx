import { useState } from "react";

function ClickMeBtn() {
  const [count, setCount] = useState(0);

  return (
    <div id="clickMeButtonContainer">
      <button onClick={() => setCount((c) => c + 1)}>click Me</button>
      <p id="count">count: {count}</p>
    </div>
  );
}

export default ClickMeBtn;
