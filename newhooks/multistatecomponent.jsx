import * as React from "react";
import { useState } from "react";

const MultiStateComponent = () => {
  const [n1, updaten1] = useState(0);
  const [n2, updaten2] = useState(0);
  const [res, add] = useState(0);
  const handleN1Change = evt => {
    const a = parseInt(evt.target.value);
    updaten1(a);
  };
  const handleN2Change = evt => {
    const a = parseInt(evt.target.value);
    updaten2(a);
  };
  const clear =() => {
     updaten1(0);
     updaten2(0);
     add(0);
  }
  const addition =() =>{
      const output = n1 + n2;
      add(output);
  }
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="N1">N1</label>
        <input
          type="text"
          className="form-control"
          value={n1}
          onChange={handleN1Change}
        />
      </div>
      <div className="form-group">
        <label htmlFor="N2">N2</label>
        <input
          type="text"
          className="form-control"
          value={n2}
          onChange={handleN2Change}
        />
      </div>
      <div className="form-group">
        <label htmlFor="res">Result</label>
        <input type="text" className="form-control" value={res} />
      </div>
      <div className="form-group">
        <button className="btn btn-warning" onClick={clear}>Clear</button>
        <button className="btn btn-success" onClick={addition}>Add</button>
      </div>
    </div>
  );
};

export default MultiStateComponent;
