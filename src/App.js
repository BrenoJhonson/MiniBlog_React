import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import PostForm from "./components/PostForm";
import './App.css'; 

function App() {
  return (
    <div className="background">
      <Header />
      <Banner />
      <PostForm />
    </div>
  );
}

export default App;

