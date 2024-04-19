import { useContext } from "react";
import IconHeart from "./IconHeart";
import { PhotoContext } from "../context/PhotoContext";

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotoContext);

  const handleLikeClick = (id) => {
    // encuentra la foto en el array de fotos
    const updatedPhotos = photos.map((photo) =>
      photo.id === id ? { ...photo, liked: !photo.liked } : photo
    );
    // actualiza el array de fotos con la foto marcada como favorita
    setPhotos(updatedPhotos);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {Array.isArray(photos) &&
        photos.map((photo, index) => (
          <div key={index} className="photo-container">
            <div className="image-wrapper">
              <img src={photo.url} alt={`Photo ${index}`} />
              <div className="icon-heart-container">
                <IconHeart filled={photo.liked} onLikeClick={() => handleLikeClick(photo.id)} />
              </div>
              <p className="photo-title">{photo.alt}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Gallery;
