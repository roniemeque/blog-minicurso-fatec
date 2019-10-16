import fetch from "isomorphic-unfetch";
import Post from "../components/Post";

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
  console.log(process.env.API_URL);

  const { posts } = await (await fetch(`${process.env.API_URL}/posts`)).json();

  return { posts };
};

export default Posts;
