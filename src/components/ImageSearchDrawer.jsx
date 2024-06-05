import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const ImageSearchDrawer = ({ images, isOpen, onClose }) => {
  const [searchResults, setSearchResults] = useState([]);

  const searchImage = async (imageUrl) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const VISION_API_URL =
      "https://vision.googleapis.com/v1/images:annotate?key=" + API_KEY;
    const requestBody = {
      requests: [
        {
          image: {
            source: {
              imageUri: imageUrl,
            },
          },
          features: [
            {
              type: "WEB_DETECTION",
            },
          ],
        },
      ],
    };

    try {
      const response = await axios.post(VISION_API_URL, requestBody);
      // console.log(response)
      const webDetection = response.data.responses[0].webDetection;
      console.log(webDetection);
      setSearchResults(webDetection.visuallySimilarImages);
    } catch (error) {
      console.error("Error fetching visually similar images:", error);
    }
  };

  const searchAllImages = () => {
    images.forEach((image) => searchImage(image.src));
  };

  React.useEffect(() => {
    if (isOpen) {
      searchAllImages();
    }
  }, [isOpen]);

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <button onClick={onClose}>Close</button>
      <div className="results">
        {searchResults.map((result, index) => (
          <div key={index}>
            <img src={result.url} alt={result.title} />
            <p>{result.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearchDrawer;
