
import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from '../components/IconHeart'

const Favorites = () => {
  const { photos } = useContext(PhotoContext);

  // filtrar las fotos para mostrar marcadas como favoritas
  const favoritePhotos = photos.filter((photo) => photo.liked);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.map((photo) => (
          <div key={photo.id} className="photo-container">
            <div className="image-wrapper">
              <img src={photo.url} alt={photo.alt} />
              <div className="icon-heart-container">
                <IconHeart id={photo.id} filled={photo.liked} />
              </div>
              <p className="photo-title">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
