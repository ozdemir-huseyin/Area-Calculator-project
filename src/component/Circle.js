import react from "react";

const pi = 3.14159265358979323846;
function Circle() {
  const [r, setR] = react.useState();
  const [Area, setArea] = react.useState();

  function findArea() {
    // alan hesaplamasini yapmak icin
    const yariCap = Number(r);
    setArea(pi * yariCap * yariCap);
  }

  function handleInput(e) {
    // input degerini almak icin
    setR(e.target.value);
  }

  return (
    <div className="circle">
      <div className="circle-top">
        <h1 className="circle-tittle"> Area of a Circle</h1>
        <input
          className="circle-input"
          type="text"
          onChange={handleInput}
          placeholder="yari cap giriniz"
        />
        <button className="circle-button" onClick={findArea}>
          Hesapla
        </button>
      </div>

      <h1 className="circle-result">Result :{Area} </h1>
      <hr />
    </div>
  );
}

export default Circle;
