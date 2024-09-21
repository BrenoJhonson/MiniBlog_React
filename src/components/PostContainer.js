import React from "react";
import styled from "styled-components";
import PostForm from "./PostForm";


const PostList = styled.div`
    margin-top: 20px;
`


class PostContainer extends React.Component {
    state = {
        posts: []
    }
    adicionarPostagem = (event) => {

        event.preventDefault();

        let titulo = this.state.titulo;
        let conteudo = this.state.conteudo;
        let url = this.state.url;

        let post = [... this.state.post, { titulo, conteudo, url }];
        this.setState({ post: post });
        this.setState({ titulo: "" });
        this.setState({ conteudo: "" });
        this.setState({ url: "" });
    }
    render() {
        return (
            <>
                <PostList>
                    <h2>Postagens:</h2>
                    <ul>
                        {this.state.posts.map((post, index) => (
                            <li key={index}>
                                <h3>{post.titulo}</h3>
                                <p>{post.conteudo}</p>
                                {post.url && <img src={post.url} alt={post.titulo} style={{ maxWidth: "200px" }} />}
                            </li>
                        ))}
                    </ul>
                </PostList>
            </>
        )
    }
}