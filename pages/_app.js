import '../styles/globals.css'
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(async () => {
    // change background color
    if (pageProps) {
      const backgroundColor = pageProps.isProductPage === true
        ? pageProps.colors.backgroundColor
        : '#FFF';
      document.body.style.background = backgroundColor;
    }
  });

  return <Component {...pageProps} />;
}

export default MyApp
