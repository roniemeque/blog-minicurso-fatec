import fetch from "isomorphic-unfetch";
import Post from "../components/Post";

const Posts = ({ posts }) => {
  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="lista-posts">
        {posts.map(post => (
          <Post key={post.path} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

Posts.getInitialProps = async () => {
  const { posts } = await (await fetch(
    `http://localhost:3000/api/posts`
  )).json();

  return { posts };
};

export default Posts;
