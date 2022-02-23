import React from 'react';
import 'antd/dist/antd.css';
import { Routes, Route } from "react-router-dom";

import './App.css';
import {PeoplesComponent} from '../peoples/peoplesComponent';
import {PeopleComponent} from '../people/people.component';
import {NotFoundComponent} from '../notFound/notFound.component';
import {EditPeopleComponent} from '../editPeople/editPeople.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PeoplesComponent />} />
        <Route path="/people/:name" element={<PeopleComponent />} />
        <Route path="/people/edit/:name" element={<EditPeopleComponent />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </div>
  );
}

export default App;
