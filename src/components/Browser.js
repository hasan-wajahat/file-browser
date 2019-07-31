import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Menu,
  MenuItem,
  Modal,
  TextField,
  Button,
} from '@material-ui/core';
import { Folder as FolderIcon, Attachment as FileIcon } from '@material-ui/icons';
import { deleteItem, editItem } from 'reducer_hook_helpers/actions';

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
  modal: {
    background: 'white',
    top: '50%',
    left: '50%',
    position: 'absolute',
    width: '400px',
    height: '200px',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  textInput: {
    marginTop: '50px',
  },
  saveButton: {
    display: 'block',
    margin: '20px auto',
  },
}));

const Browser = ({
  openedDirectory,
  onOpenFolder,
  currentPath,
  dispatch,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();

  // opens context menu
  const onRightClick = (event, item) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    // to be used for deleting and editing
    setSelectedItem(item);
  };

  const onDelete = () => {
    dispatch(deleteItem(selectedItem));
    setAnchorEl(null);
  };

  const onOpenModal = () => {
    setAnchorEl(null);
    setModalOpen(true);
  };

  const onChange = (event) => {
    setSelectedItem({
      ...selectedItem,
      name: event.target.value,
    });
  };

  const onSave = () => {
    dispatch(editItem(selectedItem));
    setModalOpen(false);
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
        </Fragment>
      ))}

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={onDelete}>
          Delete
        </MenuItem>
        <MenuItem onClick={onOpenModal}>
          Rename
        </MenuItem>
      </Menu>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div className={classes.modal}>
          <TextField
            value={selectedItem.name}
            onChange={onChange}
            label="name"
            error={!selectedItem.name}
            className={classes.textInput}
          />
          <Button
            variant="contained"
            onClick={onSave}
            className={classes.saveButton}
            disabled={!selectedItem.name}
          >
            Save
          </Button>
        </div>
      </Modal>
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
