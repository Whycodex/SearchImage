import React, { useEffect, useState } from 'react';
import ImageSearchDrawer from './components/ImageSearchDrawer';
import useImageDetection from './hooks/useImageDetection';

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const images = useImageDetection();

  useEffect(()=>{
    setIsDrawerOpen(true);
  },[])

  return (
    <div className="app">
      <div>
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcREoZy5hFhKV6hlX-FNDfLXag3_m5jAyGgFL9p7QWG_Spz6p-O0" alt="image"/>
      </div>
      <button onClick={() => setIsDrawerOpen(true)}>Search Images with Google</button>
      <ImageSearchDrawer
        images={images}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default App;
