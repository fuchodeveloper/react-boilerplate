import React from 'react';
import { render } from 'react-dom';
import App from './App';

const Index = () => (
    <div>
      <App />
    </div>
);

render(<Index />, document.getElementById('root'));

