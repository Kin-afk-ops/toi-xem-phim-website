export default function sitemap() {
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
  ];
}
