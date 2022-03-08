import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WorkProvider from './store/WorkProvider';

ReactDOM.render(
  <React.StrictMode>
    <WorkProvider>
      <App />
    </WorkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
