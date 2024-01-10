import { useState } from "react";

export const SearchList = ({ list }) => {
  const [searchString, setSearchString] = useState("");

  const handleSearch = (event) => {
    setSearchString(event.target.value);
  };

  const filteredList = list.filter((el) =>
    el.title.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <div>
      <label>
        <span>Search</span>
        <input type="text" value={searchString} onChange={handleSearch} />
      </label>
      <ul>
        {filteredList.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};
