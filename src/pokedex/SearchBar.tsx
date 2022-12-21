import React from "react";
import { Provider, History, Trigger } from "react-history-search";
// import "react-history-search/dist/index.css";

interface Props {
  searchInputChange: (e: string) => void;
  searchVal: string;
  searchData: () => void;
}

const SearchBar = ({ searchInputChange, searchVal, searchData }: Props) => {
  const handleSearch = (value: string) => {
    searchInputChange(value);
  };

  return (
    <Provider
      value={{
        handleSearch,
        isEnterDown: true,
      }}
    >
      <div>
        <History isHint isTabFill>
          <input
            className="search"
            id="some_unique_id"
            onChange={(e) => searchInputChange(e.target.value)}
            value={searchVal}
          />
        </History>
        <Trigger dataId="some_unique_id">
          <button className="search-button" onClick={searchData}>
            Search
          </button>
        </Trigger>
      </div>
    </Provider>
  );
};

export default SearchBar;
