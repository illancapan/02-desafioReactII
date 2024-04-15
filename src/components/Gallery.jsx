import { useState, useEffect } from 'react';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const jsonData = await import('../data/photos.json');
        console.log('jsonData:', jsonData);
        setPhotos(jsonData.photos);
      } catch (error) {
        console.error('error photos.json: ', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="gallery grid-columns-5 p-3">
      {Array.isArray(photos) && photos.map((photo, index) => (
        <img key={index} src={photo.url} alt={`Photo ${index}`} />
      ))}
    </div>
  );
};

export default Gallery;
