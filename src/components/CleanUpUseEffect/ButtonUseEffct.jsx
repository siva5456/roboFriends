import React, { useEffect, useState } from "react";

function ButtonUseEffct() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    alert("rendered");
  },[count2]);

  return (
    <div>
      ButtonUseEffct
      <h1>count1: {count1}</h1>
      <h1>count2: {count2}</h1>
      <button onClick={() => setCount1(count1 + 1)}>count1</button>
      <button onClick={() => setCount2(count2 + 1)}>count2</button>
    </div>
  );
}

export default ButtonUseEffct;
