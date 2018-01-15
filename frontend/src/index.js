import React from 'react';
import ReactDOM from 'react-dom';
import Code from './components/Code';
import Navbar from './components/Navbar';

ReactDOM.render(
    <div>
        <Navbar />
        <Code />
    </div>,
    document.getElementById('root')
);