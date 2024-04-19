import IconHeart from './IconHeart'
import { PhotoContext } from "../context/PhotoContext";
import { useContext } from "react";

const Gallery = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {Array.isArray(photos) &&
        photos.map((photo, index) => (
          <div key={index} className="photo-container">
            <div className="image-wrapper">
              <img src={photo.url} alt={`Photo ${index}`} />
              <div className="icon-heart-container">
                <IconHeart filled={photo.liked} />
              </div>
              <p className="photo-title">{photo.alt}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Gallery;
