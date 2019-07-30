import React, { useReducer, useState } from 'react';
import Browser from 'components/Browser';
import { directoryReducer } from 'reducer_hook_helpers/reducers';
import { addFolder } from 'reducer_hook_helpers/actions';
import {
  Container,
  makeStyles,
  AppBar,
  Button,
} from '@material-ui/core';
import { ArrowBackSharp as BackIcon } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
  navBar: {
    display: 'flex',
    width: '100%',
  },
  navHeading: {
    flexGrow: 1,
    justifyContent: 'center',
  },
}));

const initialState = [];

export default function App() {
  const [directories, dispatch] = useReducer(directoryReducer, initialState);
  const [currentPath, setCurrentPath] = useState('root');
  const classes = useStyles();

  const onBack = () => {
    const pathArray = currentPath.split('/');
    const parentPathArray = pathArray.slice(0, pathArray.length - 1);
    setCurrentPath(parentPathArray.join('/'));
  };

  const openedDirectory = directories.filter(file => file.path.includes(currentPath)) || [];

  return (
    <Container className={classes.root}>
      <AppBar>
        <div className={classes.navBar}>
          <BackIcon onClick={onBack} />
          <div className={classes.navHeading}>
            <h3>{currentPath}</h3>
          </div>
        </div>
      </AppBar>
      <Browser
        openedDirectory={openedDirectory}
        onOpenFolder={setCurrentPath}
      />
      <Button
        variant="contained"
        onClick={() => dispatch(addFolder({
          name: 'test-1',
          key: Date.now().toString(),
          path: currentPath,
        }))}
      >
        Add folder
      </Button>
    </Container>
  );
}
