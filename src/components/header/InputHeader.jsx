"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./header.scss";
import "./responsive.scss";

const InputHeader = () => {
  const [query, setQuery] = useState("");
  const [display, setDisplay] = useState(false);
  const router = useRouter();

  const handleHidden = () => {
    setDisplay(!display);
  };

  const handleKeyDown = (e) => {
    const searchQuery = query.split(" ").join("+");
    if (e.keyCode === 13) {
      router.push(`/danh-sach/tim-kiem?q=${searchQuery}&page=1`);
    }
  };

  const handleClick = () => {
    const searchQuery = query.split(" ").join("+");

    router.push(`/danh-sach/tim-kiem?q=${searchQuery}&page=1`);
  };

  return (
    <>
      <div className="inputIcon" onClick={handleHidden}>
        {display ? (
          <i class="fa-solid fa-xmark"></i>
        ) : (
          <i class="fa-solid fa-magnifying-glass"></i>
        )}
      </div>
      <div className={display ? "display__flex headerInput" : "headerInput"}>
        <div className="overlay"></div>
        <input
          type="text"
          placeholder="Nhập tên bộ phim..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          enterKeyHint="search"
        />

        <button className="headerButton" onClick={handleClick}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </>
  );
};

export default InputHeader;
