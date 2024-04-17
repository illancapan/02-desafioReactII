import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import { PhotoProvider } from "./context/PhotoContext";

// const PHOTO_URL = "/photos.json";

const App = () => {
  return (
      <PhotoProvider>
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
    </div>
      </PhotoProvider>
  );
};
export default App;
