import React, { Component } from 'react';
import AddProductComponent from './components/appproduct';
import ListProductsComponent from './components/listproducts';
// the connect will be used to connect React Object Model with redux Object Models
// this will map the state received from store to props for the component 
import { connect } from 'react-redux';

// import the action creator to be dispatched
import { addProduct } from './actions/actions';


// this is the main component that will be used for
// 1. redux store subscription
// 2. this will manage lifecycle of Redux Objects like action dispatch, state updates and 
// 3. store notification
class MainReduxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        // define a destructure props that will 
        // 1. dispatch the addProduct action with payload
        // 2. read the store state for notifying added product (visibleproducts)
        const { dispatch, visibleproducts } = this.props;
        return ( <
            div className = "container" >
            <
            AddProductComponent AddProductClick = { product => dispatch(addProduct(product)) }
            /> <
            br / >
            <
            ListProductsComponent listproducts = { visibleproducts }
            /> <
            /div>
        );
    }
}

// connect the props from the local component to the 
// redux object model so that updated state from Store
// will be available to props of the current component
function mapStateToProps(state) {
    console.log(`currently mapped state as ${JSON.stringify(state)}`);
    return {
        visibleproducts: state.listproducts
    }
}

export default connect(mapStateToProps)(MainReduxComponent);