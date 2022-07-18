//import logo from './logo.svg';
//import './App.css';
import Photos from "./components/Photos";
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

function App() {
  const [selectedImng, setSelectedImg] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage setSelectedImg/>} />
          <Route path="/Post" element={<PostPage />} />
        </Routes> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
