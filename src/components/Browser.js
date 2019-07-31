import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Menu, MenuItem } from '@material-ui/core';
import { Folder as FolderIcon, Attachment as FileIcon } from '@material-ui/icons';
import { deleteItem } from 'reducer_hook_helpers/actions';

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

const Browser = ({
  openedDirectory,
  onOpenFolder,
  currentPath,
  dispatch,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const classes = useStyles();

  const onRightClick = (event, item) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
  };

  const onDelete = () => {
    dispatch(deleteItem({ item: selectedItem }));
    setAnchorEl(null);
  };

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
              onContextMenu={event => onRightClick(event, directory)}
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
            <div
              className={classes.file}
              onContextMenu={event => onRightClick(event, directory)}
            >
              <FileIcon />
              <h3>
                {directory.name}
              </h3>
            </div>
            )}
          </Fragment>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={!!anchorEl}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={onDelete}>
              Delete
            </MenuItem>
            <MenuItem>Rename</MenuItem>
          </Menu>
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
  dispatch: PropTypes.func.isRequired,
};

export default Browser;
