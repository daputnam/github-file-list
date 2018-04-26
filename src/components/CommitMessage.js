import React from "react";

function CommitMessage({commit}) {
  console.log(commit);
  return (
    <span >{commit.message}</span>
  )
}

export default CommitMessage;