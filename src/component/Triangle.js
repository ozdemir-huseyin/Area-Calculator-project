import React, { useState } from "react";

function Triangle() {
  const [bv, setBv] = useState();
  const [h, setH] = useState();
  const [triangle, setTriangle] = useState();

  function TriangleArea() {
    const baseValue = Number(bv);
    const heighValue = Number(h);
    setTriangle((baseValue * heighValue) / 2);
  }

  function handleInput1(e) {
    setBv(e.target.value);
  }
  function handleInput2(e) {
    setH(e.target.value);
  }

  return (
    <div className="rectangle">
      <div className="rectangle-top">
        <h1 className="rectangle-tittle"> Area of a Rectangle</h1>
        <input
          className="rectangle-input1"
          type="text"
          onChange={handleInput1}
          placeholder=" tabanini giriniz"
        />
      </div>
      <div>
        <button className="rectangle-button" onClick={TriangleArea}>
          Hesapla
        </button>
      </div>
      <input
        className="rectangle-input2"
        type="text"
        onChange={handleInput2}
        placeholder=" yüksekliğini giriniz"
      />

      <h1 className="rectangle-result">Result : {triangle}</h1>
      <hr />
    </div>
  );
}
export default Triangle;
