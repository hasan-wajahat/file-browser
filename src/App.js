import React, { useReducer, useState } from 'react';
import './App.css';
import Browser from 'components/Browser';
import { directoryReducer } from 'reducer_hook_helpers/reducers';
import { addFolder } from 'reducer_hook_helpers/actions';

const initialState = [];

export default function App() {
  const [directories, dispatch] = useReducer(directoryReducer, initialState);
  const [currentKey, setCurentKey] = useState('root/');

  const openedDirectory = directories.filter(file => file.key.includes(currentKey)) || [];

  return (
    <div className="App">
      <h1>apps</h1>
      <Browser openedDirectory={openedDirectory} />
      <button
        type="button"
        onClick={() => dispatch(addFolder({ name: 'test', key: currentKey }))}
      >
        Add folder
      </button>
    </div>
  );
}
