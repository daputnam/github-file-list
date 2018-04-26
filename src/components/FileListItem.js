import React from 'react';
import PropTypes from 'prop-types';
import FileIcon from './FileIcon';
import CommitMessage from './CommitMessage';
import Time from '../time';

function getFileName(file) {
  return (
    <span className="file-name-badge">
      <FileIcon file={file} key={0}/>
      <span className="file-name" key={1}>{file.name}</span>
    </span>
  );
}

const FileListItem = ({ file }) => (
  <div className="file-list-item">
    {getFileName(file)}
    <CommitMessage commit={file.latestCommit} />
    <span className="age">
      <Time time={file.updated_at}/>
    </span>
  </div>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileListItem;