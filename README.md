# Blog Interativo com React

Este projeto é um blog simples, desenvolvido em React, que permite criar postagens, visualizar banners e preencher formulários de postagem.

## Funcionalidades

- **Postagem de conteúdo:** Usuários podem preencher um formulário e submeter suas postagens.
- **Banner Dinâmico:** Um banner fixo com design moderno.
- **Layout Responsivo:** O design se ajusta automaticamente para diferentes tamanhos de tela.

## Estrutura de Arquivos

- **`App.js`**: Arquivo principal que importa os componentes e gerencia o layout do aplicativo. Contém o `Header`, `Banner` e `PostForm`.
- **`App.css`**: Contém as estilizações aplicadas à interface do usuário, incluindo o plano de fundo e posicionamento de elementos.
- **`index.js`**: Ponto de entrada da aplicação que renderiza o componente principal `App`.

## Como Executar o Projeto

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
2. **Instale as Dependências**
  Certifique-se de ter o Node.js instalado. Em seguida, execute o seguinte comando para instalar todas as dependências necessárias:
   ```bash
   npm install
   
3. **Execute o Projeto**
   ```bash
   npm start
Acesse o projeto em http://localhost:3000.

## Estilo e Design
O projeto utiliza CSS para estilizar a interface, com uma imagem de fundo aplicada de forma fixa e um layout responsivo, adaptável a diferentes tamanhos de tela. Confira o exemplo de estilização em App.css:
   ```css
.background {
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), 
              url('https://i.imgur.com/a1H8VAa.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
```

## Técnologias Utilizadas
- **`React`**: Biblioteca para construção de interfaces de usuário.
-  **`CSS`**: Para estilização da interface.
