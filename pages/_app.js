import "../styles/globals.css";
import Link from "next/link";
import Script from "next/script";
import Head from "next/head";
import NavBar from "../components/NavBar";
import HeaderBar from "../components/HeaderBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <div>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
          />
          <title>Dashboard Wegentum Tech</title>
          <meta name="description" content />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />
          <link
            rel="stylesheet"
            href="../assets/vendor/css/core.css"
            className="template-customizer-core-css"
          />
          <link
            rel="stylesheet"
            href="../assets/vendor/css/theme-default.css"
            className="template-customizer-theme-css"
          />
          <link rel="stylesheet" href="../assets/css/demo.css" />
          <link
            rel="stylesheet"
            href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
          />
          <link
            rel="stylesheet"
            href="../assets/vendor/libs/apex-charts/apex-charts.css"
          />
        </div>
      </Head>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <NavBar />

          <div className="layout-page">
            <HeaderBar />

            <Component {...pageProps} />
          </div>
        </div>
      </div>
      <Script src="../assets/vendor/js/helpers.js" />
      <Script src="../assets/js/config.js" />
      <Script src="../assets/vendor/libs/jquery/jquery.js" />
      <Script src="../assets/vendor/libs/popper/popper.js" />
      <Script src="../assets/vendor/js/bootstrap.js" />
      <Script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js" />
      <Script src="../assets/vendor/js/menu.js" />
      <Script src="https://cdn.jsdelivr.net/npm/apexcharts" />{" "}
      {/* <=====<  this is used for comment */}
      <Script src="../assets/js/main.js" />
      <Script src="../assets/js/dashboards-analytics.js" />
      <Script src="https://buttons.github.io/buttons.js" />
    </>
  );
}

export default MyApp;
