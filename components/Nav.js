import Link from "next/link";

const Nav = () => (
  <nav className="nav">
    <Link href="/">
      <a className="link" title="Posts">
        Posts
      </a>
    </Link>
    <Link href="/novo">
      <a className="link" title="Novo post">
        Novo post
      </a>
    </Link>
  </nav>
);

export default Nav;
