export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      Disallow: "/search*",
    },
    sitemap: "https://next-movie-mu.vercel.app/sitemap.xml",
  };
}
