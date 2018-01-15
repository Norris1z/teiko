import React from 'react';
import ReactDOM from 'react-dom';
import Code from './components/Code';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Navbar />
            <Code />
        </div>
    </Provider>,
    document.getElementById('root')
);