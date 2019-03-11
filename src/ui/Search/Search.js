import React from "react";
import PropTypes from "prop-types";

import "./Search.scss";
const Search = props => {
  return (
    <div className="form-group has-search">
      <span className="fa fa-search form-control-feedback" />
      <input
        type="text"
        className="form-control form-control-sm search-input rounded rounded-pill"
        placeholder="Search"
      />
    </div>
  );
};

Search.propTypes = {};

export default Search;
