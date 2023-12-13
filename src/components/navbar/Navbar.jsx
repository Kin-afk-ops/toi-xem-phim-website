import "./navbar.scss";
import "./responsive.scss";
import axiosInstance from "../../config";
import Link from "next/link";

const Navbar = async () => {
  const resCountries = await axiosInstance.get("/country");
  const resCate = await axiosInstance.get("/categories");
  const categories = resCate.data;
  const countries = resCountries.data;

  return (
    <div className="navbar">
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
      <div className="navbarList">
        <label htmlFor="buttonCheck" className="navbarListCloseIcon">
          <i className="fa-regular fa-circle-xmark"></i>
        </label>
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
                  href={`/danh-sach/categories/${c.name.toLowerCase()}?page=1`}
                >
                  {c.name}
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
                  href={`/danh-sach/country/${c.name.toLowerCase()}?page=1`}
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbarItems">
          <Link
            className="link navbarItemsLink"
            href={`/danh-sach/categories/animeMovie?page=1`}
          >
            Phim lẻ
          </Link>
        </div>

        <div className="navbarItems">
          <Link
            className="link navbarItemsLink"
            href={`/danh-sach/categories/animeSeries?page=1`}
          >
            Phim bộ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
