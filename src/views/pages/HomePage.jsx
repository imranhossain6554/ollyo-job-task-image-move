import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [dataImage, setDataImage] = useState([]);
  const [selectedImages, setSelectedImages] = useState({});
  const [hoveredImage, setHoveredImage] = useState(null);

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

  const handleImageClick = (imageSrc) => {
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [imageSrc]: !prevSelectedImages[imageSrc],
    }));
  };
  console.log("xxx", selectedImages);
  return (
    <div className="bg-white lg:container lg:mx-auto mt-8 mb-16">
      <div className="flex justify-between mt-6">
        <p className="ml-6 mt-6">3 files selected</p>
        <button className="text-[red] font-bold mr-6 mt-6" type="button">
          Delete Files
        </button>
      </div>
      <div className="h-1 w-full border-b-[1px] border-black mb-12 "></div>

      <div className="lg:container lg:mx-auto mt-8 mb-10 grid grid-cols-5 gap-4 p-8 relative">
        {dataImage.map((imageData, index) => (
          <div
            key={index}
            className={`relative overflow-hidden w-full border-solid border-2 rounded-md border-gray-200 ${
              index === 0 ? "col-span-2 row-span-2 " : ""
            }`}
            onMouseEnter={() => setHoveredImage(imageData.image)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div
              className={`w-96 h-96 absolute bg-[#9c9898] top-0 ${
                hoveredImage === imageData.image ? "opacity-50" : "opacity-0"
              } max-w-xs transition duration-500 ease-in-out`}
            ></div>
            <img
              src={imageData.image}
              alt={`Image ${index}`}
              onClick={() => handleImageClick(imageData.image)}
            />
            {hoveredImage === imageData.image && (
              <label
                className="absolute top-0 left-0 mt-2 ml-2 bg-transparent"
                style={{ padding: "4px" }}
              >
                <input
                  type="checkbox"
                  className="mr-2 bg-transparent"
                  onChange={() => handleImageClick(imageData.image)}
                />
                Select
              </label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
