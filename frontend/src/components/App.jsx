import React , { Component } from 'react';
import Code from './Code';
import Output from './Output';
import Navbar from './Navbar';

class App extends Component{
    render() {
        return (
            <div>
                <Navbar />
                <Code />
                <Output />
            </div>
        );
    }
}

export default App;