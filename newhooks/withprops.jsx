import * as React from "react";
import { useState, useContext } from "react";
import { DataContext } from "./datacontext";

const ParentComponent = () => {
  const [name, updateName] = useState("");

  return (
    <div className="container">
      <h2>The Parent Component</h2>
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={evt => updateName(evt.target.value)}
      />
      <hr />
      <FirstChildComponent name={name} />
      <hr />
      <SecondChildComponent name={name} />
      <DataContext.Provider value={name}>
        <ThirdChildComponent/>
      </DataContext.Provider>
    </div>
  );
};

const FirstChildComponent = props => {
  return (
    <div className="container">
      <h2>The First Child</h2>
      <div className="form-group">{`The First ${props.name}  Child`}</div>
    </div>
  );
};

const SecondChildComponent = props => {
  return (
    <div className="container">
      <h2>The Second Child</h2>
      <div className="form-group">{`The Second ${props.name} Child`}</div>
    </div>
  );
};

const ThirdChildComponent = props => {
    const data = useContext(DataContext);
  return (
    <div className="container">
      <h2>The Third Child</h2>
      <div className="form-group">{`The Second ${data} Child`}</div>
    </div>
  );
};

export default ParentComponent;
