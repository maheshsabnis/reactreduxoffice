import * as React from "react";
import {useContext, useState} from 'react';
import { DataContext } from './datacontext';
const TableComponentContext = () => {
    // receive data from the container component
  const data = useContext(DataContext);
  
  // here we are receiving data from the container object
  const dataSource = data[Object.keys(data)[0]];  // the data source
  const event = data[Object.keys(data)[1]]; // the event
   
  const source = data.employees;
  const columns= [];
  for (const p in dataSource[0]) {
    columns.push(p);
  }
  return (
    <table className="table table-bordered tablestriped">
      <thead>
        <tr>
          {columns.map((v, i) => (
            <td key={i}>{v}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((c, i) => (
          <tr key={i} onClick={()=>event(c)}>
            {columns.map((v, j) => (
              <td key={j}>{c[v]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableComponentContext;