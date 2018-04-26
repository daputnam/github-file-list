import React from 'react';
import PropTypes from 'prop-types';

function FileIcon({ file }) {
  let icon = 'fa-file-alt';
  if(file.type === 'folder'){
    icon = 'fa-folder';
  }
  return (
    <span className="file-icon">
      <i className={`far ${icon}`}/>
    </span>
  )
}
FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileIcon;