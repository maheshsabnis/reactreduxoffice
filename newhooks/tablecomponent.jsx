import * as React from "react";
const TableComponent = props => {
    // receive data from the container component
  const data = props.data; 
  const columns= [];
  for (const p in data[0]) {
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
        {data.map((c, i) => (
          <tr key={i}>
            {columns.map((v, j) => (
              <td key={j}>{c[v]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableComponent;