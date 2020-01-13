import React, { useState } from 'react';

function Employee() {

    const [Emp, addEmployees] = useState({ EmpNo: 0, EmpName: '' });
    return (
        <div>
          <input type="text" value={EmpNo}/>
          <br/>
          <input type="text" value={EmpName}/>
          <br/>
          <input type="button" value="Add" onClick={() => addEmployees()}/>
        </div>
    );
}

export default Employee;