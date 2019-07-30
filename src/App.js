import React, { useReducer, useState } from 'react';
import Browser from 'components/Browser';
import { directoryReducer } from 'reducer_hook_helpers/reducers';
import { addFolder } from 'reducer_hook_helpers/actions';

const initialState = [];

export default function App() {
  const [directories, dispatch] = useReducer(directoryReducer, initialState);
  const [currentPath, setCurrentPath] = useState('root/');

  const openedDirectory = directories.filter(file => file.path.includes(currentPath)) || [];

  return (
    <div className="App">
      <h1>apps</h1>
      <Browser
        openedDirectory={openedDirectory}
        onOpenFolder={setCurrentPath}
      />
      <button
        type="button"
        onClick={() => dispatch(addFolder({
          name: `test-${Date.now().toString()}`,
          key: Date.now().toString(),
          path: currentPath,
        }))}
      >
        Add folder
      </button>
    </div>
  );
}
