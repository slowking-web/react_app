import React, { useEffect, useState } from 'react';
import Masonry from "react-masonry-css";

const Columns = {
  default: 4,
  1200: 3,
  1000: 2,
  700: 1
};

function Photos() {
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
      <Masonry
        breakpointCols={Columns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items.map(item => (
          <div>
            <img src={item.src} alt="" />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Photos;