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
import Popup from './components/Popup';
import ContenedorInteracao from './components/ContenedorInteracao';
import BotaoComentar from './components/BotaoComentar';
import BotaoRemover from './components/BotaoRemover'; // Importar o novo Botão Remover

const imagemPadrao = 'https://profitec.uema.br/wp-content/uploads/2023/06/Analise-e-Des_de_Sistemas-300x300.jpg'; // Substitua por um link válido

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
    entradaComentario: {}, 
    erroTitulo: "",
    erroImagem: ""
  };

  lidarMudanca = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  lidarMudancaComentario = (e, id) => {
    const { value } = e.target;
    this.setState((prevState) => ({
      entradaComentario: {
        ...prevState.entradaComentario,
        [id]: value
      }
    }));
  };

  validarURLImagem = (url) => {
    const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    return regex.test(url);
  };

  adicionarPostagem = () => {
    const { entradaTitulo, entradaConteudo, entradaImagem } = this.state;

    if (entradaTitulo.length > 50) {
      this.setState({ erroTitulo: "O título não pode ter mais de 50 caracteres" });
      return;
    }

    if (entradaImagem && !this.validarURLImagem(entradaImagem)) {
      this.setState({ erroImagem: "URL de imagem inválida" });
      return;
    }

    if (entradaTitulo && entradaConteudo) {
      const novaPostagem = {
        titulo: entradaTitulo,
        conteudo: entradaConteudo,
        imagem: entradaImagem || imagemPadrao,
        id: Date.now(),
      };

      this.setState((prevState) => ({
        postagens: [...prevState.postagens, novaPostagem],
        entradaTitulo: "",
        entradaConteudo: "",
        entradaImagem: "",
        erroTitulo: "",
        erroImagem: ""
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
    const comentario = this.state.entradaComentario[id];

    if (comentario && comentario.trim() !== "") {
      this.setState((prevState) => ({
        comentarios: {
          ...prevState.comentarios,
          [id]: [...(prevState.comentarios[id] || []), comentario],
        },
        entradaComentario: {
          ...prevState.entradaComentario,
          [id]: ""
        }
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
          {this.state.erroTitulo && <p style={{ color: "red" }}>{this.state.erroTitulo}</p>}
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
          {this.state.erroImagem && <p style={{ color: "red" }}>{this.state.erroImagem}</p>}
          <button onClick={this.adicionarPostagem}>Adicionar Postagem</button>
        </ContenedorFormulario>

        {this.state.postagens.map((post) => (
          <ContenedorCartao key={post.id}>
            <ContenedorImagem src={post.imagem || imagemPadrao} />
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
                {/* Usando o novo Botão Remover */}
                <BotaoRemover onClick={() => this.removerPostagem(post.id)}>Remover</BotaoRemover>
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
                  value={this.state.entradaComentario[post.id] || ""}
                  onChange={(e) => this.lidarMudancaComentario(e, post.id)}
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
