import "../assets/icon/fontawesome/css/all.min.css";
import "./globals.css";
import "./grid.css";
import "./customSwiper.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Poppins } from "next/font/google";
import GoodMovie from "@/components/goodMovie/GoodMovie";
import axiosInstance from "@/config";
import Script from "next/script";

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

const object = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://phimmoiyyy.net/#person",
      name: "Phimmoi",
      image: {
        "@type": "ImageObject",
        "@id": "https://phimmoiyyy.net/#logo",
        url: "https://phimmoiyyy.net/wp-content/uploads/2023/03/Moiphimphimmoi.png",
        contentUrl:
          "https://phimmoiyyy.net/wp-content/uploads/2023/03/Moiphimphimmoi.png",
        caption: "Phimmoi",
        inLanguage: "en-US",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://phimmoiyyy.net/#website",
      url: "https://phimmoiyyy.net",
      name: "Phimmoi",
      publisher: {
        "@id": "https://phimmoiyyy.net/#person",
      },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://phimmoiyyy.net/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://phimmoiyyy.net#webpage",
      url: "https://phimmoiyyy.net",
      name: "Phimmoi | Phimmoi.net | Xem phim mới | Phim hay | Phim chiếu rạp",
      about: {
        "@id": "https://phimmoiyyy.net/#person",
      },
      isPartOf: {
        "@id": "https://phimmoiyyy.net/#website",
      },
      inLanguage: "en-US",
    },
  ],
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

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(object) }}
        strategy="lazyOnload"
      />
    </html>
  );
}
