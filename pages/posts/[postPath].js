import fetch from "isomorphic-unfetch";
import { apiUrl } from "../../helpers/api";

const Post = ({ post }) => {
  return (
    <div className="container">
      <div className="post-pagina">
        <h1>{post.titulo}</h1>
        <img src={post.thumb} alt="" className="post-imagem" />
        <div className="post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="post-corpo">{post.corpo}</p>
      </div>
    </div>
  );
};

Post.getInitialProps = async ({ query: { postPath } }) => {
  const { post } = await (await fetch(`${apiUrl}/posts/${postPath}`)).json();

  return { post };
};

export default Post;
