import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Folder as FolderIcon, Attachment as FileIcon } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    marginTop: '100px',
  },
  folder: {
    margin: '10px',
    cursor: 'pointer',

    '&:hover': {
      color: '#3F51B5',
    },
  },
  file: {
    margin: '10px',
  },
}));

const Browser = ({ openedDirectory, onOpenFolder, currentPath }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {openedDirectory.map(directory => (
        <Fragment key={directory.key}>
          <Fragment>
            {directory.type === 'folder' && (
            <div
              className={classes.folder}
              onClick={() => onOpenFolder({
                path: `${currentPath.path}/${directory.key}`,
                name: `${currentPath.name}/${directory.name}`,
              })}
            >
              <FolderIcon />
              <h3>
                {directory.name}
              </h3>
            </div>
            )}
          </Fragment>
          <Fragment>
            {directory.type === 'file' && (
            <div className={classes.file}>
              <FileIcon />
              <h3>
                {directory.name}
              </h3>
            </div>
            )}
          </Fragment>
        </Fragment>
      ))}
    </div>
  );
};

Browser.propTypes = {
  openedDirectory: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    key: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  onOpenFolder: PropTypes.func.isRequired,
  currentPath: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Browser;
