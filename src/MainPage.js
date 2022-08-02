import React from 'react'
import './App.css';
import "./styles.css";
import Photos from "./components/Photos";

const MainPage = () => {

    return (
        <div>
            <main id="main" class="main">
                <Photos />
            </main>
        </div>
    );
};

export default MainPage;