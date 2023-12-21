import "../assets/icon/fontawesome/css/all.min.css";
import "./globals.css";
import "./grid.css";
import "./customSwiper.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Poppins } from "next/font/google";
import GoodMovie from "@/components/goodMovie/GoodMovie";
import axiosInstance from "@/config";
export const metadata = {
  title: "Xem phim HD",
  description: "Trang web Xem phim HD cung cấp phim nước ngoài hay!",
};

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const scroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default async function RootLayout({ children }) {
  const resHot = await axiosInstance.get(`/home?qHot=${true}`);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <div className="home grid wide">
          <div className="row no-gutters">
            <div className="l-9 m-12 s-12"> {children}</div>
            <GoodMovie movies={resHot.data} />
          </div>
        </div>
        <a href="header" className="pageUp">
          <i className="fa-regular fa-circle-up"></i>
        </a>
        <Footer />
      </body>
    </html>
  );
}
