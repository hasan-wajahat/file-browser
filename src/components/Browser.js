import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Browser = ({ openedDirectory, onOpenFolder }) => (
  <div>
    <h3>Browser</h3>
    {openedDirectory.map(directory => (
      <Fragment key={directory.key}>
        <Fragment>
          {directory.type === 'folder' && (
          <h3 onClick={() => onOpenFolder(`${directory.key}/${directory.key}`)}>
            <span>Folder</span>
            {directory.name}
          </h3>
          )}
        </Fragment>
        <Fragment>
          {directory.type === 'file' && (
          <h3>
            <span>file</span>
            {directory.name}
          </h3>
          )}
        </Fragment>
      </Fragment>
    ))}
  </div>
);

Browser.propTypes = {
  openedDirectory: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    key: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  onOpenFolder: PropTypes.func.isRequired,
};

export default Browser;
