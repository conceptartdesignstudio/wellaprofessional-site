module.exports = {
  reactStrictMode: false,
  output: 'standalone',
  future: { webpack5: true },
  images: {
    domains: ["localhost", process.env.NEXT_PUBLIC_WELLA_ENV],
  },
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        ssr: false,
      },
    ],
  ],
};
