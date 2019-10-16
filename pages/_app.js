import App from "next/app";
import Layout from "../components/Layout";
import "../styles/styles.scss";

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
