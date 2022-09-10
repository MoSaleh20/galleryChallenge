import axios from "axios";
import React, { useEffect, useState } from "react";
import "../index.css";

const Gallery = () => {
  const [data, setData] = useState([]);

  const getImages = async () => {
    const res = await axios({
      method: "get",
      url: `https://picsum.photos/v2/list?page=${parseInt(
        Math.random() * 10
      )}&limit=9`,
    });
    setData(res.data);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="container">
      <div className="gallery">
        {data.map((item) => (
          <img
            key={item.id}
            className="img"
            src={item.download_url}
            alt={item.author}
          />
        ))}
      </div>

      <hr className="line" />

      <button className="generate-btn" onClick={() => {
            getImages();
          }}>
        Generate
      </button>
    </div>
  );
};

export default Gallery;
