import React, { useReducer, useState } from 'react';
import Browser from 'components/Browser';
import { directoryReducer } from 'reducer_hook_helpers/reducers';
import { Container, makeStyles } from '@material-ui/core';
import TopBar from 'components/TopBar';
import AddButtons from 'components/AddButtons';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
}));

const initialState = [];

export default function App() {
  const [directories, dispatch] = useReducer(directoryReducer, initialState);
  // saving key separate from name so we can change name without issue
  const [currentPath, setCurrentPath] = useState({ name: 'root', path: 'root' });
  const classes = useStyles();

  // memoize this
  const openedDirectory = directories.filter(file => file.path === currentPath.path) || [];

  return (
    <Container className={classes.root}>
      <TopBar
        currentPath={currentPath}
        setCurrentPath={setCurrentPath}
      />
      <Browser
        openedDirectory={openedDirectory}
        onOpenFolder={setCurrentPath}
        currentPath={currentPath}
        dispatch={dispatch}
      />
      <AddButtons
        directories={directories}
        dispatch={dispatch}
        currentPath={currentPath}
      />
    </Container>
  );
}
