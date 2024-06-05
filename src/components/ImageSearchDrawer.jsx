import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ImageSearchDrawer = ({ images, isOpen, onClose }) => {
  const [searchResults, setSearchResults] = useState([]);

  const searchImage = async (imageUrl) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const CX = process.env.REACT_APP_CX;
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?q=${imageUrl}&searchType=image&key=${API_KEY}&cx=${CX}`
    );
    setSearchResults(response.data.items);
  };

  const searchAllImages = () => {
    images.forEach(image => searchImage(image.src));
  };

  React.useEffect(() => {
    if (isOpen) {
      searchAllImages();
    }
  }, [isOpen]);

  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>Close</button>
      <div className="results">
        {searchResults.map((result, index) => (
          <div key={index}>
            <img src={result.link} alt={result.title} />
            <p>{result.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearchDrawer;