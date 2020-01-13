import * as React from "react";
import { useState} from "react";
import TableComponentContext from './tablecomponentContext';
import { DataContext } from './datacontext';

const ObjectComponent = () => {
  const [employee, updateState] = useState({ EmpNo: 0, EmpName: "" });
  const [employees, display] = useState([]);
  const products =[{ProductId:101,ProductName:'P1'},{ProductId:102,ProductName:'P2'}];
  const save = () => {
    display([
      ...employees,
      { EmpNo: employee.EmpNo, EmpName: employee.EmpName }
    ]);
  };
  const clear = () => {
    updateState({ EmpNo: 0, EmpName: "" });
  };
  const loadData = (obj) =>{
    console.log(JSON.stringify(obj));
    updateState(obj);
  };
  return (
    <div className="container">
      <form name="frmEmp">
        <div className="form-group">
          <label htmlFor="EmpNo">EmpNo</label>
          <input
            type="text"
            className="form-control"
            name="EmpNo"
            value={employee.EmpNo}
            onChange={evt =>
              updateState({ ...employee, EmpNo: parseInt(evt.target.value) })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="EmpName">EmpName</label>
          <input
            type="text"
            className="form-control"
            name="EmpName"
            value={employee.EmpName}
            onChange={evt =>
              updateState({ ...employee, EmpName: evt.target.value })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="button"
            className="btn btn-warning"
            onClick={clear}
            value="New"
          ></input>
          <input
            type="button"
            className="btn btn-success"
            onClick={save}
            value="Save"
          ></input>
        </div>
        <div className="container">{`Data ${JSON.stringify(employee)}`}</div>
        <div className="container">
          Added Employees
          {JSON.stringify(employees)}
        </div>
      </form>
      <hr/>
    <DataContext.Provider value={{employees,updateState}}>
       <TableComponentContext/>
    </DataContext.Provider>
    </div>
  );
};

export default ObjectComponent;
