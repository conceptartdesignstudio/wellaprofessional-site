module.exports = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    domains: ['localhost', process.env.NEXT_PUBLIC_WELLA_ENV],
    unoptimized: true
  },
}
