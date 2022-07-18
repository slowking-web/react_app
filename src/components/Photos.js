import DataPhotos from "./BD/BD.json";
import Masonry from "react-masonry-css";

const Columns = {
  default: 4,
  1200: 3,
  1000: 2,
  700: 1
};

const Photos = ({ setSelectedImg }) => {
  return (
    <div className="center-masonry">
      <Masonry
        breakpointCols={Columns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {DataPhotos.map(({ id, src }) => {
          return (
            <div onClick={() => setSelectedImg(id)} key={id}>
              <img src={src} alt="" />
            </div>
          );
        })}
      </Masonry>
    </div>
  );
};
export default Photos;