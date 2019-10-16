import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="layout">
    <Nav />
    <main className="main">{children}</main>
    <Footer />
  </div>
);

export default Layout;
