import React, { Fragment } from 'react';

const Browser = ({ openedDirectory }) => (
  <div>
    <h3>Browser</h3>
    {openedDirectory.map(directory => (
      <Fragment>
        <Fragment>
          {directory.type === 'folder' && (
          <h3>
            Folder
            {' '}
            {directory.name}
          </h3>
          )}
        </Fragment>
        <Fragment>
          {directory.type === 'file' && (
          <h3>
            file
            {' '}
            {directory.name}
          </h3>
          )}
        </Fragment>
      </Fragment>
    ))}
  </div>
);

export default Browser;
