import React from 'react';
import ReactDom from 'react-dom';
import "!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css";
import MainReduxComponent from './reduxapp/maincomponent';

// import createStore from redux
import { createStore, applyMiddleware } from 'redux';
 
// import reducer
// this will by default read the combineRedecurs() export
import reducer from './reduxapp/reducers/reducer';
// import Procider from react-redux so that the react-redux object model will 
// be coupled 
import { Provider } from 'react-redux';

// create a store using createStore() and reducer as input parameter
const store = createStore(reducer);

// copule the Provider with store and execute MainReduxComponent
ReactDom.render(
    <Provider store={store}>
      <MainReduxComponent/>
    </Provider>,
    document.getElementById('app')
);