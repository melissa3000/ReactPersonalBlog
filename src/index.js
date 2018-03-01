import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// BrowserRouter object is what interacts with the history library and decides what
// to do based on a change in the url. The Route object is a React component that can
// be rendered inside any other react component in the application. The purpse of the
// Route component is to provide that configuration that will say if the url looks like
// this, then show that component.
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// Create two class based components for testing purposes
class Hello extends React.Component {
    render() {return <div>Hello!</div> }
}

class Goodbye extends React.Component {
    render() {return <div>Goodbye!</div> }
}

// Create two route components and mapping two instances of the route component up
// to each of the two test components (Hello and Goodbye) above.
// If a user goes to this path (or url), show this component
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Route path="/hello" component={Hello} />
            <Route path="/goodbye" component={Goodbye} />
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
