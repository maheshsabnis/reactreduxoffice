import React, { Component } from 'react';

class AddProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // the method is bind with the 'click' of button
    save(){
        let product ={};
        // reading value of input elements that defines 'ref' property 
        product.ProductId = this.refs.ProductId.value;
        product.ProductName = this.refs.ProductName.value;
        console.log(JSON.stringify(product));
        // call a dispatcher from the parent of the component taht will displatch action
        // and update store with state
        this.props.AddProductClick(product);
        // clear the refs
        this.refs.ProductId.value = 0;
        this.refs.ProductName.value = '';
    }
    render() {
        return (
            <div className="container">
               <div className="form-group">
                 <label htmlFor="ProductId">ProductId</label>
                 <input type="text" ref="ProductId" className="form-control"/>
               </div>
               <div className="form-group">
                 <label htmlFor="ProductName">ProductName</label>
                 <input type="text" ref="ProductName" className="form-control"/>
               </div>
               <div className="form-control">
                 <input type="button" value="Save" onClick={this.save.bind(this)} className="btn btn-success"/>
               </div>
            </div>
        );
    }
}

export default AddProductComponent;