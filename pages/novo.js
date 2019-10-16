import { useState } from "react";
import Link from "next/link";

const Novo = () => {
  const [post, setPost] = useState({
    titulo: "",
    tags: "",
    corpo: "",
    thumb: "/static/img/doguinho.jpg"
  });

  const [criandoPost, setCriandoPost] = useState(false);

  const [postCriadoPath, setPostCriadoPath] = useState("");

  const handleInput = e => {
    // e eh um evento sintetico
    const {
      currentTarget: { value, name }
    } = e;

    setPost({
      ...post,
      [name]: value
    });
  };

  const criarPost = async e => {
    e.preventDefault();

    setCriandoPost(true);

    const res = await fetch(`/api/posts/criar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    });
    const { path } = await res.json();

    setPostCriadoPath(path);
    setCriandoPost(false);
  };

  return (
    <div className="container">
      <h1>Novo post</h1>
      <form onSubmit={criarPost} className="form">
        <input
          placeholder="Titulo"
          value={post.titulo}
          type="text"
          name="titulo"
          className="input"
          onChange={handleInput}
        />
        <input
          placeholder="Tag1, Tag2, Tag3"
          value={post.tags}
          type="text"
          name="tags"
          className="input"
          onChange={handleInput}
        />
        <input
          placeholder="Thumb"
          value={post.thumb}
          type="text"
          name="thumb"
          className="input"
          onChange={handleInput}
        />
        <textarea
          placeholder="Corpo"
          value={post.corpo}
          type="text"
          name="corpo"
          className="input"
          onChange={handleInput}
        ></textarea>
        <button className="button">Criar</button>
        {!!criandoPost && (
          <div className="circulo-loading">
            <div />
            <div />
            <div />
            <div />
          </div>
        )}
        {!!postCriadoPath && (
          <Link href={`/posts/${postCriadoPath}`}>
            <a className="post-criado-link">Post criado!</a>
          </Link>
        )}
      </form>
    </div>
  );
};

export default Novo;
