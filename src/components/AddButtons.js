import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from '@material-ui/core';
import { addFolder, addFile } from 'reducer_hook_helpers/actions';

const AddButtons = ({ directories, dispatch, currentPath }) => (
  <div>
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
  </div>
);

AddButtons.propTypes = {
  directories: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    key: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  currentPath: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default AddButtons;
