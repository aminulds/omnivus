import { useEffect } from 'react';
import '/styles/bootstrapModified/main.css';

function MyApp({ Component, pageProps }) {
  // bootstrap js
  useEffect(() => {
    import("/node_modules/bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
