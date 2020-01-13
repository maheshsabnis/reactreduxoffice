import React, {useState} from 'react'
import GenericTableComponent from './GenericTableComponent';
import { DataContext } from '../newhooks/datacontext';

// the funcaiotnal component
// functional components contains
// React Hook objects for 
// 1. state --> useState(), 
// 2. props with Context --> useContext() and createContext(), 
// 3. Component Lifecycle Effects --> useEffect()
function UseStateComponent() {
    // counter is a state of the component
    // this has default value as 0 (useState(0))
    // the counter state will be updated using 
    // updateCounter() method
    const [counter, updateCounter] = useState(0);
    const [employee, updateEmployee] = useState({EmpNo:0,EmpName:''});
    const [employees, addEmployee] = useState([]);
    const clear=() =>{
        updateEmployee({EmpNo:0,EmpName:''});
    } 
    const save = ()=>{
        addEmployee([...employees,{EmpNo:employee.EmpNo, EmpName:employee.EmpName}]);
    }
    return (
        <div className="container">
            <label>{counter}</label>
            <input type="button" value="update"
             onClick={()=>updateCounter(counter+1)}/>
           <hr/>
           <div className="form-group">
             <label htmlFor="EmpNo">EmpNo</label>
             <input type="text" name="EmpNo" className="form-control" value={employee.EmpNo} 
             onChange={evt=> updateEmployee({...employee, EmpNo:evt.target.value})}/>
           </div>
           <div className="form-group">
             <label htmlFor="EmpName">EmpName</label>
             <input type="text" name="EmpName" className="form-control" 
             value={employee.EmpName} onChange={(evt)=> updateEmployee({...employee, EmpName:evt.target.value})}/>
           </div>  
           <br/>
           <div className="form-group">
            {
                JSON.stringify(employee)
            }
           </div>
           <div className="form-group">
             <input type="button" value="New" onClick={clear} className="btn btn-warning"/>
             <input type="button" value="Save" onClick={save} className="btn btn-success"/>
           </div>
           <hr/>
          { /* <div className="form-group">
             <GenericTableComponent dataSource={employees}/>
        </div> */}
        <div className="form-group">
          <DataContext.Provider value={employees}>
              <GenericTableComponent/>
          </DataContext.Provider>
        </div>
        </div>
    )
}

export default UseStateComponent
