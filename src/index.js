import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'
import "./index.css";

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  )
}
Time.propTypes = {
  time: PropTypes.string
}

const FileListItem = (props) => {
  return (
    <div>File list item</div>
  )
}

const FileList = (props) => {
  return (
    <div>file list
      {props.files.map(file) => {
        return (
          <FileListItem file={file}/>
        )
      }}
      
    </div>
  )
}
FileList.PropTypes = {
  files: PropTypes.array
}
ReactDOM.render(<FileList/>, document.getElementById("root"));
