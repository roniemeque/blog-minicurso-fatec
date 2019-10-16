import { posts } from "../mocks/posts";
import { apiUrl } from "../helpers/api";

const Footer = () => {
  const populaDados = () => {
    posts.forEach(async post => {
      console.log(post);

      await fetch(`${apiUrl}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
      });
    });
  };

  return (
    <footer className="footer">
      <a href="https://github.com/roniemeque">github.com/roniemeque</a>
      <span className="footer-popular" onClick={populaDados}>
        Popular dados
      </span>
    </footer>
  );
};

export default Footer;
