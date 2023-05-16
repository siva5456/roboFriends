import React, { useState } from "react";

function Colors() {
  const [colors, setColors] = useState([]);
  const [index, setindex] = useState("");
  const [color, setColor] = useState(null);

  let handleColors = () => {
    setColors([
      ...colors,
      {
        uniqueColor: `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(
          Math.random() * 255
        )},${Math.ceil(Math.random() * 255)})`,
        id: colors.length + 1,
      },
    ]);
  };
  // console.log(JSON.stringify(colors));

  let handleIndex = (e) => {
    setindex(e.target.value);
  };

  // console.log(colors);

  let handleColorCode = (e) => {
    e.preventDefault();
    if (index < colors.length) {
      setColor(index);
    } else {
      alert("pleas add color box to get that code");
    }
  };

  return (
    <div>
      <div
        style={{
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleColorCode}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label htmlFor="index" style={{ color: "white", fontSize: "23px" }}>
            Enter Box Number to get color: &nbsp; &nbsp;{" "}
          </label>
          <input
            type="text"
            name=""
            id="index"
            value={index}
            onChange={handleIndex}
            required
            style={{ height: 42, borderRadius: 8, fontSize: "20px" }}
          />
          <button
            type="text"
            style={{
              height: 50,
              backgroundColor: "crimson",
              color: "white",
              borderRadius: 8,
              padding: 10,
              marginLeft: "20px",
            }}
          >
            get Color code
          </button>
        </form>
      </div>

      <div style={{ height: "250px", border: "solid 2px pink" }}>
        <center>
          {color && (
            <div
              style={{
                height: 100,
                width: 100,
                backgroundColor: colors[color].uniqueColor,
                marginTop: "15px",
              }}
            ></div>
          )}
        </center>
        <center>
          {color === 0 && (
            <div
              style={{
                height: 100,
                width: 100,
                backgroundColor: colors[color].uniqueColor,
                marginTop: "15px",
              }}
            ></div>
          )}
        </center>
        <br /> <br />
        {color && (
          <h1 style={{ color: "white", fontSize: "23px" }}>
            {colors[color].uniqueColor}
          </h1>
        )}
        {color === 0 && (
          <h1 style={{ color: "white", fontSize: "23px" }}>
            {colors[color].uniqueColor}
          </h1>
        )}
      </div>
      <button onClick={handleColors}>Add Color Box</button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap-reverse",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap-reverse",
            width: "100%",
            padding: 45,
          }}
        >

          {colors &&
            colors.map(({ uniqueColor }, i) => {
              return (
                <div
                  key={i}
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: uniqueColor,
                    color: "black",
                  }}
                  onClick={() => {
                    setColor(i);
                    setindex(i);
                  }}
                >
                  <h1>{i}</h1>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Colors;
