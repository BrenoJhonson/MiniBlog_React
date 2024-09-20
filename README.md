# Blog React

Bem-vindo ao projeto **Blog React**, uma aplicação desenvolvida com o objetivo de permitir a criação, interação e visualização de postagens de maneira dinâmica e intuitiva. Este projeto foi construído utilizando **React**, oferecendo uma interface moderna e responsiva para que os usuários possam criar postagens, curtir, comentar e expandir o conteúdo para uma leitura completa.

## Funcionalidades Principais

- **Criação de Postagens:** Os usuários podem criar novas postagens, inserindo um título, conteúdo e uma imagem, proporcionando uma experiência completa de publicação.
- **Interação com Postagens:** Cada postagem pode ser curtida e comentada, incentivando a interação entre os usuários.
- **Expansão de Conteúdo:** Quando o conteúdo de uma postagem excede 100 caracteres, o usuário pode clicar em "Leia Mais" para expandir o conteúdo completo em um modal.
- **Gerenciamento de Postagens:** As postagens podem ser removidas pelos próprios usuários, permitindo controle sobre os conteúdos publicados.

## Componentes do Projeto

O projeto é estruturado em torno de componentes modulares para facilitar a escalabilidade e a manutenção. Abaixo estão os principais:

- **Container:** O componente que encapsula toda a estrutura do blog.
- **ContenedorCartao:** Responsável por exibir as postagens em formato de cartão.
- **ContenedorImagem:** Exibe as imagens associadas a cada postagem.
- **ContenedorConteudo:** Agrupa o título, excerto e as interações (curtir, comentar).
- **TituloPost:** Exibe o título da postagem de maneira destacada.
- **ExcertoPost:** Exibe um resumo da postagem, limitando o conteúdo para visualização rápida.
- **BotaoCurtir:** Permite que os usuários curtam uma postagem.
- **EntradaComentario:** Um campo interativo onde os usuários podem inserir novos comentários.
- **ListaComentarios:** Exibe os comentários deixados por outros usuários para cada postagem.
- **Popup:** Modal que exibe o conteúdo completo de postagens longas, proporcionando uma experiência de leitura fluida.
- **ContenedorInteracao:** Reúne todas as funcionalidades de interação (curtidas, comentários).

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **React:** Biblioteca JavaScript amplamente utilizada para construção de interfaces de usuário.
- **CSS Modules:** Utilizado para estilização dos componentes de forma modular e organizada, garantindo um design consistente e fácil manutenção.
