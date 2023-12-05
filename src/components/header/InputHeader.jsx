"use client";

import { useState } from "react";
import "./header.scss";
import "./responsive.scss";

const InputHeader = () => {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      window.location.replace(
        `/danh-sach/search/${query.toLowerCase()}?page=1`
      );
    }
  };

  const handleClick = () => {
    window.location.replace(`/danh-sach/search/${query.toLowerCase()}?page=1`);
  };

  return (
    <div className="headerInput">
      <label
        htmlFor="headerSearchCheckbox"
        className="headerSearchCheckboxLogo"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </label>

      <input
        style={{ display: "none" }}
        type="checkbox"
        id="headerSearchCheckbox"
        className="headerSearchCheckbox"
      />

      <label htmlFor="headerSearchCheckbox" className="overlay"></label>
      <input
        type="text"
        placeholder="Nhập tên bộ phim..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        enterKeyHint="search"
      />

      <button className="headerButton" onClick={handleClick}>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default InputHeader;
