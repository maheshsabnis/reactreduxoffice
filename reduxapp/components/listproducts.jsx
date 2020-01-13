import React, { Component } from 'react';

class ListProductsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };

        console.log(`Received Products ${JSON.stringify(this.props.listproducts)}`);
    }
    render() { 
        return ( 
            <div className="container">
              <table className="table table-bordered table-striped">
                 <thead>
                   <tr>
                    <td>Product Id</td>
                    <td>Product Name</td>
                   </tr>
                 </thead>
                 <tbody>
                    {
                        this.props.listproducts.map((v,i)=>(
                            <tr key={i}>
                              <td>{v.product.ProductId}</td>
                              <td>{v.product.ProductName}</td>
                            </tr>
                        ))
                    }
                 </tbody>
              </table>
            </div>
        );
    }
}
 
export default ListProductsComponent;