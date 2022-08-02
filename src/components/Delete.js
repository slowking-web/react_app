import React, { useEffect, useState } from 'react';
import Masonry from "react-masonry-css";
import axios from 'axios';
import MainPage from '../MainPage';

const Columns = {
  default: 4,
  1200: 3,
  1000: 2,
  700: 1
};

const API_URL = "https://i1f0of7ut8.execute-api.ap-northeast-1.amazonaws.com/prod/deletefile_handler";

function Delete() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://i1f0of7ut8.execute-api.ap-northeast-1.amazonaws.com/prod/undefined')
    .then(res => res.json())
    .then(
      (result) => {
        setItems(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
   }, [])

  return (
    <div className="center-masonry"> 
        {items.map(item => (
          <form method="post" action="https://i1f0of7ut8.execute-api.ap-northeast-1.amazonaws.com/prod/deletefile_handler" class="contact-form">
            <br />
            <div class="img-center">
              <img src={item.src} alt="" name={item.filename}  width="193" height="130" />
            </div>
            <p><input type="submit" value="削除" /></p>
            <input type="hidden" id="name" name="name" value={item.filename} />
            <br /> 
          </form>
            ))}
    </div>
    
  );
};

export default Delete;