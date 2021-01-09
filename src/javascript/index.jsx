// core-js/stable and reg. runtime
// are needed for babel
import 'core-js/stable';
// only import core-js this once
import 'regenerator-runtime/runtime';
// reg. runtime is for poly-filling
// 'async' calls, import when needed
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />, document.getElementById('root'));
