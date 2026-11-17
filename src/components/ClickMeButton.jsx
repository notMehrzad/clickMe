import { useState } from "react";

function ClickMeBtn() {
  const [count, setCount] = useState(0);

  return (
    <div className="clickMe">
      <button onClick={() => setCount((c) => c + 1)}>click Me</button>
      <span>count: {count}</span>
    </div>
  );
}

export default ClickMeBtn;
