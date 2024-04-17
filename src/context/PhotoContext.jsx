import { createContext, useState, useEffect } from "react";

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const jsonData = await import("../data/photos.json");
        console.log("jsonData:", jsonData);
        setPhotos(jsonData.photos);
      } catch (error) {
        console.error("error photos.json: ", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <PhotoContext.Provider
      value={{
        photos,
        setPhotos,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};
