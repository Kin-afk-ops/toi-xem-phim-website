import "./header.scss";
import "./responsive.scss";

import InputHeader from "./InputHeader";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header id="header" className="header ">
      <div className="headerContent grid wide">
        <Navbar />
        <InputHeader />
      </div>
    </header>
  );
};

export default Header;
