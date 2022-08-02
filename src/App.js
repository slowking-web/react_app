import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import "./styles.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import MainPage from './MainPage';
import PostPage from './PostPage';
import DeletePage from './DeletePage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/UploadPage" element={<PostPage />} />
          <Route path="/DeletePage" element={<DeletePage />} />
        </Routes> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
