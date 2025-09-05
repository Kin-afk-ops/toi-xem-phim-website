"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetData = async () => {
      const resCate = await axiosInstance.get("/categories");
      const resCountries = await axiosInstance.get("/country");
      setCategories(resCate.data);
      setCountries(resCountries.data);
    };

    fetData();
  }, []);

  useEffect(() => {
    // mỗi khi pathname thay đổi thì đóng menu
    setDisplay(false);
  }, [pathname]);

  const handleHidden = () => {
    setDisplay(!display);
  };

  const handleClickCate = (name) => {
    const nameQuery = name.toLowerCase().split(" ").join("+");
    display && setDisplay(false);
    router.push(`/danh-sach/the-loai.html?category=${nameQuery}&page=1`);
  };

  const handleClickCountry = (name) => {
    const nameQuery = name.toLowerCase().split(" ").join("+");
    display && setDisplay(false);
    router.push(`/danh-sach/quoc-gia.html?country=${nameQuery}&page=1`);
  };

  return (
    <div className="navbar">
      <div className="navbarListIcon" onClick={handleHidden}>
        {display ? (
          <i className="fa-solid fa-xmark"></i>
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
          <div className="navbarItemsWrapper">
            <span>
              <i className="fa-solid fa-bars"></i>
              Thể loại
            </span>
          </div>
          <ul>
            {categories?.map((c, index) => (
              <li key={index}>
                <div className="link" onClick={() => handleClickCate(c.name)}>
                  <span className="gach">-&nbsp;</span> {c.name}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbarItems">
          <div className="navbarItemsWrapper">
            <span>
              <i className="fa-sharp fa-solid fa-globe"></i>
              Quốc gia
            </span>
          </div>
          <ul>
            {countries?.map((c, index) => (
              <li key={index}>
                <div
                  className="link navbarItemsChild"
                  onClick={() => handleClickCountry(c.name)}
                >
                  <span className="gach">-&nbsp;</span> {c.name}
                </div>
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
