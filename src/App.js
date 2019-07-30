import React, { useReducer, useState } from 'react';
import Browser from 'components/Browser';
import { directoryReducer } from 'reducer_hook_helpers/reducers';
import { addFolder, addFile } from 'reducer_hook_helpers/actions';
import {
  Container,
  makeStyles,
  Button,
} from '@material-ui/core';
import TopBar from 'components/TopBar';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
}));

const initialState = [];

export default function App() {
  const [directories, dispatch] = useReducer(directoryReducer, initialState);
  const [currentPath, setCurrentPath] = useState({ name: 'root', path: 'root' });
  const classes = useStyles();

  const openedDirectory = directories.filter(file => file.path === currentPath.path) || [];

  return (
    <Container className={classes.root}>
      <TopBar currentPath={currentPath} setCurrentPath={setCurrentPath} />
      <Browser
        openedDirectory={openedDirectory}
        onOpenFolder={setCurrentPath}
        currentPath={currentPath}
      />
      <Button
        variant="contained"
        onClick={() => dispatch(addFolder({
          name: `folder-${directories.length + 1}`,
          key: Date.now().toString(),
          path: currentPath.path,
        }))}
      >
        Add folder
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch(addFile({
          name: `file-${directories.length + 1}`,
          key: Date.now().toString(),
          path: currentPath.path,
        }))}
      >
        Add File
      </Button>
    </Container>
  );
}
