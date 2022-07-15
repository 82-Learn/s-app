import * as React from "react";
import { Fragment } from "react";
import Footer from "./components/footer/Footer";
import Layout from "./components/layout/Layout";
import AppRouter from "./components/routes/AppRouter";
import { GlobalStyle } from "./globals/global.styles";

function App() {
  return (
    <>
      <Fragment>
        <GlobalStyle />
        <Layout>
          <AppRouter />
        </Layout>
        <Footer />
      </Fragment>
    </>
  );
}

export default App;
