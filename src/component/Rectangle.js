import React, { useState } from "react";

function Rectangle() {
  const [w, setW] = useState();
  const [l, setL] = useState();
  const [rectangle, setRectangle] = useState(w, l);

  function rectangleArea() {
    const width = Number(w);
    const lenght = Number(l);
    setRectangle(w * l);
  }

  function handleInput1(e) {
    setW(e.target.value);
  }
  function handleInput2(e) {
    setL(e.target.value);
  }

  return (
    <div className="rectangle">
      <div className="rectangle-top">
        <h1 className="rectangle-tittle"> Area of a Rectangle</h1>
        <input
          className="rectangle-input1"
          type="text"
          onChange={handleInput1}
          placeholder="uzunluk giriniz"
        />
      </div>
      <div>
        <button className="rectangle-button" onClick={rectangleArea}>
          Hesapla
        </button>
      </div>

      <input
        className="rectangle-input2"
        type="text"
        onChange={handleInput2}
        placeholder="genislik giriniz"
      />

      <h1 className="rectangle-result">Result : {rectangle}</h1>
      <hr />
    </div>
  );
}
export default Rectangle;
