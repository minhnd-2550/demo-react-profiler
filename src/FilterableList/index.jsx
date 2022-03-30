import { Chance } from "chance";
import React, { useState } from "react";
import "./styles.css";
import List from "../List";
import Filter from "../Filter";
import Button from "../Button";

const chance = new Chance();

const items = Array.from({ length: 200 }, (_, index) => ({
  value: `${chance.integer()}`,
  id: index,
}));

const FilterableList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className={"filterableList"}>
      <Filter onValueUpdated={setSearchTerm} />
      <Button />
      <List entries={items.filter((item) => item.value.includes(searchTerm))} />
    </div>
  );
};

export default FilterableList;
