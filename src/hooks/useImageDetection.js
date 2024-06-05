import { useEffect, useState } from 'react';

const useImageDetection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imgs = document.getElementsByTagName('img');
    const imageArray = Array.from(imgs).map(img => ({ src: img.src }));
    setImages(imageArray);
  }, []);

  return images;
};

export default useImageDetection;
