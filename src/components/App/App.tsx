import React, {useEffect} from 'react';
import 'antd/dist/antd.css';

import './App.css';
import {PeoplesComponent} from '../peoples/peoplesComponent';

function App() {


  return (
    <div className="App">
      {/*<header className="App-header">*/}

      {/*</header>*/}
      <PeoplesComponent />
    </div>
  );
}

export default App;
