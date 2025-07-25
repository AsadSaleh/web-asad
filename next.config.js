/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/blog",
        destination:
          "https://asadghanim.notion.site/be2974dfd64245ae9d0023d947d296ef?v=d9bffec2c5c541218f9df5cba411bae5",
        permanent: false, // or true, if it's a permanent redirect (301)
      },
    ];
  },
};

module.exports = nextConfig;
