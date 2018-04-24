import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Time from "./time";
import "./index.css";

function getFileName(file) {
  return [
    <FileIcon file={file} key={0}/>,
    <td className="file-name" key={1}>{file.name}</td>
  ];
}

function CommitMessage({commit}) {
  console.log(commit);
  return (
    <td>{commit.message}</td>
  )
}
function FileIcon({ file }) {
  let icon = 'fa-file-alt';
  if(file.type === 'folder'){
    icon = 'fa-folder';
  }
  return (
    <td className="file-icon">
      <i className={`far ${icon}`}/>
    </td>
  )
}
FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

const FileList = ({files}) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file}/>
      ))}
    </tbody>
  </table>
);
FileList.propTypes = {
  files: PropTypes.array
};

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    {getFileName(file)}
    <CommitMessage commit={file.latestCommit} />
    <td className="age">
      <Time time={file.updated_at}/>
    </td>
  </tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

const testFiles = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit"
    }
  },
  {
    id: 2,
    name: "tests",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit"
    }
  },
  {
    id: 3,
    name: "README",
    type: "file",
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: "Added a readme"
    }
  }
];

// FileList.PropTypes = {
//   files: PropTypes.array
// }

ReactDOM.render(<FileList files={testFiles}/>, document.getElementById("root"));
