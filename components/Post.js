import Link from "next/link";

const Post = ({ post }) => (
  <Link href={`/posts/${post.path}`}>
    <a title={post.titulo} className="post-card">
      <img src={post.thumb} alt="" className="post-thumb" />
      <h2 className="post-card-titulo">{post.titulo}</h2>
      <div className="post-tags">
        {post.tags.map(tag => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </a>
  </Link>
);

export default Post;
