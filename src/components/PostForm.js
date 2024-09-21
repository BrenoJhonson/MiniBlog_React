import React from "react";
import './PostForm.css';
import '../App.css';

class PostForm extends React.Component {
  state = {
    titulo: "",         // Título da postagem
    conteudo: "",       // Conteúdo da postagem
    url: "",            // URL da imagem (opcional)
    post: [],           // Lista de postagens
    showPopup: false,   // Controle de exibição do modal
    currentPost: null,  // Post atual no modal
    comentario: "",     // Comentário a ser adicionado
  };

  onChangeTitulo = (event) => {
    this.setState({ titulo: event.target.value });
  };

  onChangeConteudo = (event) => {
    this.setState({ conteudo: event.target.value });
  };

  onChangeUrl = (event) => {
    this.setState({ url: event.target.value });
  };

  onChangeComentario = (event) => {
    this.setState({ comentario: event.target.value });
  };

  adicionarPostagem = (event) => {
    event.preventDefault();
    const { titulo, conteudo, url, post } = this.state;

    if (titulo && conteudo) {
      const novaPostagem = { titulo, conteudo, url, comentarios: [], estrelas: 0 };
      this.setState({
        post: [...post, novaPostagem], // Atualiza a lista de postagens
        titulo: "",                    // Reseta os campos do formulário
        conteudo: "",
        url: "",
      });
    } else {
      alert("Por favor, preencha o título e o conteúdo.");
    }
  };

  lerPostagem = (post) => {
    this.setState({ showPopup: true, currentPost: post });
  };

  fecharPopup = () => {
    this.setState({ showPopup: false, currentPost: null, comentario: "" });
  };

  excluirPostagem = (index) => {
    const { post } = this.state;
    const novasPostagens = post.filter((_, i) => i !== index); // Filtra a postagem excluída
    this.setState({ post: novasPostagens });
  };

  adicionarComentario = (index) => {
    const { comentario, post } = this.state;

    if (comentario) {
      const novasPostagens = post.map((p, i) => {
        if (i === index) {
          return { ...p, comentarios: [...p.comentarios, comentario] }; // Adiciona comentário à postagem específica
        }
        return p;
      });

      this.setState({ post: novasPostagens, comentario: "" });
    } else {
      alert("Por favor, digite um comentário.");
    }
  };

  avaliarPostagem = (index, estrelas) => {
    const { post } = this.state;
    const novasPostagens = post.map((p, i) => {
      if (i === index) {
        return { ...p, estrelas }; // Atualiza a avaliação da postagem
      }
      return p;
    });
    this.setState({ post: novasPostagens });
  };

  render() {
    const { titulo, conteudo, url, post, showPopup, currentPost, comentario } = this.state;

    return (
      <>
        <form className="form-container" onSubmit={this.adicionarPostagem}>
          <label>Título</label>
          <input
            type="text"
            name="titulo"
            onChange={this.onChangeTitulo}
            value={titulo}
            maxLength={50}
          />

          <label>Conteúdo</label>
          <textarea
            name="conteudo"
            onChange={this.onChangeConteudo}
            value={conteudo}
          />

          <label>URL</label>
          <input
            type="url"
            name="url"
            onChange={this.onChangeUrl}
            value={url}
            placeholder="Opcional"
          />

          <div className="form-buttons">
            <button type="submit">Postar</button>
          </div>
        </form>

        <div className="post-container">
          <h3>Postagens</h3>
          {post.map((p, index) => (
            <div className="post" key={index}>
              <strong>{p.titulo}</strong>
              <p>{p.conteudo.length > 50 ? `${p.conteudo.substring(0, 50)}...` : p.conteudo}</p>
              {p.url && <img src={p.url} alt="Imagem da postagem" className="post-image" />}
              <button onClick={() => this.lerPostagem(p)}>Leia Mais</button>
              <button onClick={() => this.excluirPostagem(index)}>Excluir</button>

              {/* Avaliação com estrelas */}
              <div>
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    onClick={() => this.avaliarPostagem(index, i + 1)}
                    style={{ cursor: 'pointer', color: i < p.estrelas ? 'gold' : 'gray' }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Seção de comentários */}
              <div>
                <input
                  type="text"
                  value={comentario}
                  onChange={this.onChangeComentario}
                  placeholder="Adicionar um comentário"
                />
                <button onClick={() => this.adicionarComentario(index)}>Comentar</button>
                <div>
                  {p.comentarios.map((c, cIndex) => (
                    <p key={cIndex}>{c}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {showPopup && currentPost && (
          <div className="popup" onClick={this.fecharPopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={this.fecharPopup}>Fechar</button>
              <h2>{currentPost.titulo}</h2>
              <p>{currentPost.conteudo}</p>
              {currentPost.url && <img src={currentPost.url} alt="Imagem da postagem" />}
              <div>
                <strong>Comentários:</strong>
                {currentPost.comentarios.length > 0 ? (
                  currentPost.comentarios.map((c, cIndex) => (
                    <p key={cIndex}>{c}</p>
                  ))
                ) : (
                  <p>Nenhum comentário ainda.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default PostForm;
