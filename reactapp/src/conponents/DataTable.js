import React from "react";
import Moment from "react-moment";
import "./style.css";

function TableData(props) {
  return (
    <table className="tableEmployee ">
      <thead>
        <tr>
          <th></th>
          <th onClick={props.sortByName}>Name</th>
          <th>Phone</th>
          <th>E-mail</th>
          <th>DOB</th>
        </tr>
      </thead>
