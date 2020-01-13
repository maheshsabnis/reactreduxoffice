import React, { Component } from 'react';
class MyParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            message:'Hay!Component'
        };
    }
    render() { 
        return ( 
            <div>
              <p>Parent Component</p>
              <MyChildComponent data={this.state.message}/>

            </div>
        );
    }
}
 
class MyChildComponent extends Component {
     
    render() { 
        return (
            <div>
              <p>Child Component {this.props.data}</p>
            </div>
        );
    }
}
 

export default MyParentComponent;