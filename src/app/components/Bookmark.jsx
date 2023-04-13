import React from "react";

const Bookmark = ({ status, ...rest }) => {
  return (
    <button className="btn" {...rest}>
      <i className={"bi bi-bookmark" + (status ? "-heart" : "")}></i>
    </button>
  );
};

export default Bookmark;
