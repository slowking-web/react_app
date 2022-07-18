import React from 'react'
import './App.css';
import "./styles.css";
import Photos from "./components/Photos";

const MainPage = ({setSelectedImg}) => {
    //const [selectedImng, setSelectedImg] = useState(null);

    return (
        <div>
        <main id="main" class="main">
            <Photos setSelectedImg={setSelectedImg} />
        </main>
        </div>
    );
};

export default MainPage;