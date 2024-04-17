import { PhotoContext } from "../context/PhotoContext";
import { useContext } from "react";

const Gallery = () => {
  
  const { photos } = useContext(PhotoContext)

  return (
    // <PhotoContext.Provider>
      <div className="gallery grid-columns-5 p-3">
        {Array.isArray(photos) &&
          photos.map((photo, index) => (
            <img key={index} src={photo.url} alt={`Photo ${index}`} />
          ))}
      </div>
    // </PhotoContext.Provider>
  );
};

export default Gallery;
