import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [dataImage, setDataImage] = useState([]);
  const [selectedImages, setSelectedImages] = useState({});

  const getData = () => {
    fetch("../../../imageData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setDataImage(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleImageSelect = (imageSrc) => {
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [imageSrc]: !prevSelectedImages[imageSrc],
    }));
  };

  return (
    <div className="lg:container lg:mx-auto mt-8 mb-10 grid grid-cols-5 gap-4">
      {dataImage.map((imageData, index) => (
        <div
          key={index}
          className={`relative w-full border-solid border-2 border-gray-200 ${
            index === 0 ? "col-span-2 row-span-2" : ""
          }`}
        >
          <img src={imageData.image} alt={`Image ${index}`} />
          <label
            className="absolute top-0 left-0 mt-2 ml-2 bg-transparent"
            style={{ padding: "4px" }}
          >
            <input
              type="checkbox"
              className="mr-2 bg-transparent"
              checked={selectedImages[imageData.image] || false}
              onChange={() => handleImageSelect(imageData.image)}
            />
            Select
          </label>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
