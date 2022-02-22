import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './App.css';
import {fetchPeoples} from '../peoples/peoples.action';
import {RootState} from '../../app/store';

function App() {
  const isOn: any = useSelector((state: RootState) => {
    console.log(state);
    return state;
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPeoples)
  }, []);

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
