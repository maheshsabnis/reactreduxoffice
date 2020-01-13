import * as React from "react";
import { Component } from "react";

 
class DemoLifeCycleComponent extends Component{
   constructor(props){
      super(props);
      this.state = {
          name:'',
          counter:0
      };
   }

  componentDidMount() {
    document.title = `Clicked ${this.state.counter} times`;
  }

  componentDidUpdate(prevProps, prevState){
    // so now update the document title  conditionally
    // based on the state counter
     if (prevState.counter !== this.state.counter) {
      console.log("Updating document title");
      document.title = `Clicked ${this.state.counter} times`;
    }
  }


   
  render() {
    return (
      <div className="container">
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          {this.state.counter}
        </button>
      </div>
    );
  }
}

export default DemoLifeCycleComponent;
