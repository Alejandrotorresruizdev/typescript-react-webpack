import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';
import './styles.css';

const App = () => <HelloWorld />;

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
