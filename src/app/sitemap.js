import axiosInstance from "../config";

export default async function sitemap() {
  const baseUrl = "https://next-movie-mu.vercel.app";

  const resMovies = await axiosInstance.get("/movie/all");
  const movies = await resMovies.data;
  const moviesUrl =
    movies?.map((movie) => {
      return {
        url: `${baseUrl}/phim/${movie.slug}.html`,
        lastModified: new Date(),
      };
    }) ?? [];

  const resCategories = await axiosInstance.get("/categories");

  const categories = await resCategories.data;
  const categoriesUrl =
    categories?.map((category) => {
      const cateValue = category.name.toLowerCase().split(" ").join("+");
      return {
        url: `${baseUrl}/danh-sach/the-loai.html?category=${cateValue}&page=1`,
        lastModified: new Date(),
      };
    }) ?? [];

  const resCountries = await axiosInstance.get("/country");
  const countries = await resCountries.data;
  const countriesUrl =
    countries?.map((country) => {
      const countryValue = country.name.toLowerCase().split(" ").join("+");
      return {
        url: `${baseUrl}/danh-sach/quoc-gia.html?country=${countryValue}&page=1`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: "https://next-movie-mu.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://next-movie-mu.vercel.app/danh-sach/phim-moi-cap-nhat.html?page=1",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://next-movie-mu.vercel.app/danh-sach/phim-bo-moi-cap-nhat.html?page=1",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },

    {
      url: "https://next-movie-mu.vercel.app/danh-sach/phim-le-moi-cap-nhat.html?page=1",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.2,
    },
    ...moviesUrl,
    ...categoriesUrl,
    ...countriesUrl,
  ];
}
