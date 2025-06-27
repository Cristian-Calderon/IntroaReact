import React, { useState } from "react";
import "./todosearch.css";

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');

  return (
    <input
      placeholder="Cebolla"
      className="TodoSearch"
      onChange={(event) => {
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
