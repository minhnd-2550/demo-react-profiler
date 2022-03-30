import React from "react";
import ListItem from "../ListItem";
import "./styles.css";

const List = ({ entries }) => {
  return (
    <div className="list">
      {entries.map(({ id, value }) => (
        <ListItem key={id} value={value} />
      ))}
    </div>
  );
};

export default List;
