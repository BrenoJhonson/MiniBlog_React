import React, { Component } from 'react';
import Container from './components/Container';
import ContenedorCartao from './components/ContenedorCartao';
import ContenedorImagem from './components/ContenedorImagem';
import ContenedorConteudo from './components/ContenedorConteudo';
import TituloPost from './components/TituloPost';
import ExcertoPost from './components/ExcertoPost';
import GrupoBotoes from './components/GrupoBotoes';
import ContenedorFormulario from './components/ContenedorFormulario';
import BotaoCurtir from './components/BotaoCurtir';
import EntradaComentario from './components/EntradaComentario';
import ListaComentarios from './components/ListaComentarios';
import Comentario from './components/Comentario';
import IconePerfil from './components/IconePerfil';
import TextoComentario from './components/TextoComentario';
import BotaoLeiaMais from './components/BotaoLeiaMais';
import TituloPagina from './components/TituloPagina';
import Popup from './components/Popup'; // Importar o componente Popup
import ContenedorInteracao from './components/ContenedorInteracao'; // Importar o componente ContenedorInteracao
import BotaoComentar from './components/BotaoComentar'; // Importar o componente BotaoComentar

class App extends Component {
  state = {
    postagens: [],
    entradaTitulo: "",
    entradaConteudo: "",
    entradaImagem: "",
    postagemExpandida: "",
    tituloExpandido: "",
    modalAberta: false,
    curtidas: {},
    comentarios: {},
    entradaComentario: "",
  };

  lidarMudanca = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  adicionarPostagem = () => {
    const novaPostagem = {
      titulo: this.state.entradaTitulo,
      conteudo: this.state.entradaConteudo,
      imagem: this.state.entradaImagem,
      id: Date.now(),
    };

    if (this.state.entradaTitulo && this.state.entradaConteudo) {
      this.setState((prevState) => ({
        postagens: [...prevState.postagens, novaPostagem],
        entradaTitulo: "",
        entradaConteudo: "",
        entradaImagem: "",
      }));
    }
  };

  expandirPostagem = (conteudo, titulo) => {
    this.setState({ postagemExpandida: conteudo, tituloExpandido: titulo, modalAberta: true });
  };

  fecharModal = () => {
    this.setState({ modalAberta: false });
  };

  removerPostagem = (id) => {
    this.setState((prevState) => ({
      postagens: prevState.postagens.filter((post) => post.id !== id),
    }));
  };

  curtirPostagem = (id) => {
    this.setState((prevState) => ({
      curtidas: {
        ...prevState.curtidas,
        [id]: (prevState.curtidas[id] || 0) + 1,
      },
    }));
  };

  adicionarComentario = (id) => {
    if (this.state.entradaComentario.trim() !== "") {
      this.setState((prevState) => ({
        comentarios: {
          ...prevState.comentarios,
          [id]: [...(prevState.comentarios[id] || []), this.state.entradaComentario],
        },
        entradaComentario: "",
      }));
    }
  };

  render() {
    return (
      <Container>
        <TituloPagina>Blog React</TituloPagina>
        
        <ContenedorFormulario>
          <h2>Criar Nova Postagem</h2>
          <input
            type="text"
            name="entradaTitulo"
            placeholder="Título"
            value={this.state.entradaTitulo}
            onChange={this.lidarMudanca}
          />
          <textarea
            name="entradaConteudo"
            placeholder="Conteúdo"
            value={this.state.entradaConteudo}
            onChange={this.lidarMudanca}
          />
          <input
            type="text"
            name="entradaImagem"
            placeholder="URL da Imagem"
            value={this.state.entradaImagem}
            onChange={this.lidarMudanca}
          />
          <button onClick={this.adicionarPostagem}>Adicionar Postagem</button>
        </ContenedorFormulario>

        {this.state.postagens.map((post) => (
          <ContenedorCartao key={post.id}>
            <ContenedorImagem src={post.imagem} />
            <ContenedorConteudo>
              <TituloPost>{post.titulo}</TituloPost>
              <ExcertoPost>
                {post.conteudo.length > 100 ? (
                  <>
                    {post.conteudo.substring(0, 100)}...
                    <BotaoLeiaMais onClick={() => this.expandirPostagem(post.conteudo, post.titulo)} />
                  </>
                ) : (
                  post.conteudo
                )}
              </ExcertoPost>
              <GrupoBotoes>
                <button onClick={() => this.removerPostagem(post.id)}>Remover</button>
              </GrupoBotoes>

              <ContenedorInteracao>
                <BotaoCurtir
                  onClick={() => this.curtirPostagem(post.id)}
                  disabled={this.state.curtidas[post.id] >= 1}
                >
                  {this.state.curtidas[post.id] ? "Curtido" : "Curtir"}
                </BotaoCurtir>

                <EntradaComentario
                  type="text"
                  placeholder="Comente aqui"
                  value={this.state.entradaComentario}
                  onChange={this.lidarMudanca}
                />
                <BotaoComentar onClick={() => this.adicionarComentario(post.id)}>
                  Comentar
                </BotaoComentar>

                <ListaComentarios>
                  {this.state.comentarios[post.id]?.map((comentario, index) => (
                    <Comentario key={index}>
                      <IconePerfil>{comentario[0]}</IconePerfil>
                      <TextoComentario>{comentario}</TextoComentario>
                    </Comentario>
                  ))}
                </ListaComentarios>
              </ContenedorInteracao>
            </ContenedorConteudo>
          </ContenedorCartao>
        ))}

        {this.state.modalAberta && (
          <Popup
            titulo={this.state.tituloExpandido}
            conteudo={this.state.postagemExpandida}
            onFechar={this.fecharModal}
          />
        )}
      </Container>
    );
  }
}

export default App;
