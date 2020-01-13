import React, {useContext} from 'react'
import { DataContext } from '../newhooks/datacontext'

function GenericTableComponent() {
   // console.log(JSON.stringify(props.dataSource));
   const data = useContext(DataContext);
   console.log(JSON.stringify(data));
    return (
        <div>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <td>EmpNo</td>
                  <td>EmpName</td>
                </tr>
              </thead>
              <tbody>
                {
                    data.map((v,i)=>(
                        <tr key={i}>
                            <td>{v.EmpNo}</td>
                            <td>{v.EmpName}</td>
                        </tr>
                    ))
                }
                
              </tbody>
            </table>
        </div>
    )
}

export default GenericTableComponent
