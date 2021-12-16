module.exports = {
  reactStrictMode: false,
  future: { webpack5: true },
  images: {
    domains: [
      "localhost",
      "pro.sistemawca.com.br",
    ],
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
