// layout.jsx
"use client";
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
import "./styles/styles.css";
import "./assets/css/all.css";
import "./assets/css/meanmenu.min.css";
import "./assets/sass/style.css";

function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <html>
      <head>
        <meta name="description" content="STL | SaiGon Travel Lounge" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </head>

      <body>
        <NextTopLoader showSpinner={false} />
        {children}
        {/* <LanguageSwitcher
        /> */}
      </body>
    </html>
  );
}

export default RootLayout;
