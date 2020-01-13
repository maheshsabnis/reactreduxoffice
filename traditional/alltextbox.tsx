import * as React from 'react';
import {Component} from 'react';
interface IProps{}
interface IState {
    v1:number;
    v2:number;
    [x:string]:any;
}

class AllTextBoxComponent extends Component<IProps,IState> {
    state:IState ={
        v1:0,
        v2:0
    };
    handleChange=(evt:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({[evt.target.name]:evt.target.value});
    }
    render(){
        return(
            <div className="container">
                <table className="table table-bordered table-striped">
                    <tbody>
                       <tr>
                          <td>Value 1</td>
                          <td>
                            <input type="text" name="v1" className="form-control" value={this.state.v1}
                             onChange={this.handleChange}/>
                          </td>
                       </tr>
                       <tr>
                          <td>Value 2</td>
                          <td>
                            <input type="text" name="v2" className="form-control" value={this.state.v2}
                            onChange={this.handleChange}/>
                          </td>
                       </tr>
                    </tbody>
                </table>
                <div className="container">
                  {this.state.v1}
                  <hr/>
                  {this.state.v2}
                </div>
            </div>
        )
    }
  
}

export default AllTextBoxComponent;