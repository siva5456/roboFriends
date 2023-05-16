import React, { useState, useEffect } from "react";

import axios from "axios";

function Fetch() {
  const [Mydata, setMyData] = useState(null);
  const [promt, setPromt] = useState(null);

  useEffect(() => {
    let ac = new AbortController();

    axios
      .get("https://jsonplaceholder.typicode.com/users", { signal: ac.signal })
      .then(({ data }) => {
        setMyData(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      ac.abort();
      console.log("abort working");
    };
  }, [promt]);
  console.log("-----------------------------------------");
  console.log(Mydata);

  function myFunction() {
    setPromt(prompt());
  }

  return (
    <div>
      <h1>{promt}</h1>

      <button onClick={myFunction}>propmt</button>
      <div className="backgroundImage"></div>
      <div id="mySapn">
        <div className="span"></div>

        <span>log in</span>
        <div className="span"></div>
      </div>
    </div>
  );
}

export default Fetch;
