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
        <img src="https://unsplash.com/assets/api/applications/product-hunt-b8424efdce87891318ee83fdc29686483b57d0fae947ec2ec17f829855793a8b.jpg" alt="image"/>
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
