import fetch from "isomorphic-unfetch";
import Post from "../components/Post";
import { apiUrl } from "../helpers/api";

const Posts = ({ posts }) => {
  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="lista-posts">
        {!!posts.length ? (
          posts.map(post => <Post key={post.path} post={post}></Post>)
        ) : (
          <span>Sem posts!</span>
        )}
      </div>
    </div>
  );
};

Posts.getInitialProps = async () => {
  const { posts } = await (await fetch(`${apiUrl}/posts`)).json();

  return { posts };
};

export default Posts;
