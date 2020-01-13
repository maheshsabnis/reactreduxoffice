import React, { Component } from 'react';
import DemoLifeCycleComponent from './DemoLifeCycleComponent';

class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
               <div>
                <DemoLifeCycleComponent/>
               </div> 

          );
    }
}
 
export default LifeCycoleComponent;