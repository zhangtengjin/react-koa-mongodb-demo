import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import 'antd/dist/antd.css';
import RouterWrap from './routers';
function App() {
  return (
    <div className="App">
      <Router>
        <RouterWrap />
      </Router>
    </div>
  );
}

export default App;
