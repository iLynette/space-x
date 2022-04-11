import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router basename={process.env.PUBLIC_URL}>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
