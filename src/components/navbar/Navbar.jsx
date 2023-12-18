"use client";
import { useState, useEffect } from "react";

import "./navbar.scss";
import "./responsive.scss";
import Image from "next/image";
import axiosInstance from "../../config";
import logo from "../../assets/images/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const fetData = async () => {
      const resCate = await axiosInstance.get("/categories");
      const resCountries = await axiosInstance.get("/country");
      setCategories(resCate.data);
      setCountries(resCountries.data);
    };

    fetData();
  }, []);

  const handleHidden = () => {
    setDisplay(!display);
  };

  return (
    <div className="navbar">
      <div className="navbarListIcon" onClick={handleHidden}>
        {display ? (
          <i class="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>

      <div
        className={display ? " display__block overlay" : "overlay"}
        onClick={handleHidden}
      ></div>

      <Link href="/" className="headerLogo link">
        <Image src={logo} alt="Logo" />
      </Link>

      <div className={display ? "display__flex navbarList" : "navbarList"}>
        <div className="navbarItems">
          <div>
            <span>
              <i className="fa-solid fa-bars"></i>
              Thể loại
            </span>
          </div>
          <ul>
            {categories?.map((c, index) => (
              <li key={index}>
                <Link
                  className="link"
                  href={`/danh-sach/danh-muc-the-loai.html?category=${c.slug}&page=1`}
                >
                  <span className="gach">-&nbsp;</span> {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbarItems">
          <div>
            <span>
              <i className="fa-sharp fa-solid fa-globe"></i>
              Quốc gia
            </span>
          </div>
          <ul>
            {countries?.map((c, index) => (
              <li key={index}>
                <Link
                  className="link navbarItemsChild"
                  href={`/danh-sach/danh-muc-quoc-gia.html?country=${c.slug}&page=1`}
                >
                  <span className="gach">-&nbsp;</span> {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbarItems">
          <Link
            className="link navbarItemsLink"
            href={`/danh-sach/phim-le-moi-cap-nhat.html?page=1`}
          >
            Phim lẻ
          </Link>
        </div>

        <div className="navbarItems">
          <Link
            className="link navbarItemsLink"
            href={`/danh-sach/phim-bo-moi-cap-nhat.html?page=1`}
          >
            Phim bộ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
