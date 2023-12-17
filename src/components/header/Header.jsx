"use client";
import { useState } from "react";
import "./header.scss";
import "./responsive.scss";
import logo from "../../assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import InputHeader from "./InputHeader";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header id="header" className="header ">
      <div className="headerContent grid wide">
        <label htmlFor="buttonCheck" className="phoneButton">
          <i className="fa-solid fa-bars"></i>
        </label>

        <input
          type="checkbox"
          style={{ display: "none" }}
          id="buttonCheck"
          className="buttonCheckbox"
        />
        <label htmlFor="buttonCheck" className="overlay"></label>

        <Link href="/" className="headerLogo link">
          <Image src={logo} alt="Logo" />
        </Link>
        <Navbar />
        <InputHeader />
      </div>
    </header>
  );
};

export default Header;
