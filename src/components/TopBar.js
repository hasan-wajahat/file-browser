import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  AppBar,
} from '@material-ui/core';
import { ArrowBackSharp as BackIcon } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  navBar: {
    display: 'flex',
    width: '100%',
  },
  navHeading: {
    flexGrow: 1,
    justifyContent: 'center',
  },
}));

const TopBar = ({ currentPath, setCurrentPath }) => {
  const classes = useStyles();

  const onBack = () => {
    /**
     * We need to make changes both name and
     * Key, because the path object uses both.
     */
    const pathArray = currentPath.path.split('/');
    const nameArray = currentPath.name.split('/');

    if (pathArray.length < 2) return;

    // removes last element
    const parentPathArray = pathArray.slice(0, pathArray.length - 1);
    const parentNameArray = nameArray.slice(0, nameArray.length - 1);

    // combine into string
    setCurrentPath({
      name: parentNameArray.join('/'),
      path: parentPathArray.join('/'),
    });
  };

  return (
    <AppBar>
      <div className={classes.navBar}>
        <BackIcon onClick={onBack} />
        <div className={classes.navHeading}>
          <h3>{currentPath.name}</h3>
        </div>
      </div>
    </AppBar>
  );
};

TopBar.propTypes = {
  currentPath: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  setCurrentPath: PropTypes.func.isRequired,
};

export default TopBar;
