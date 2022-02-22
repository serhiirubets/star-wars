import React from 'react';
import 'antd/dist/antd.css';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import {PeoplesComponent} from '../peoples/peoplesComponent';
import {PeopleComponent} from '../people/people.component';
import {NotFoundComponent} from '../notFound/notFound.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PeoplesComponent />} />
        <Route path="/people/:id" element={<PeopleComponent />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </div>
  );
}

export default App;
