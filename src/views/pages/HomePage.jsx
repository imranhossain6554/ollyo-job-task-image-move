import React, { useEffect, useState } from "react";
import images1 from "../../assets/images/image-1.webp";
import images2 from "../../assets/images/image-2.webp";
const HomePage = () => {
  const [dataImage, setDataImage] = useState([]);
  const getData = () => {
    fetch("../../../imageData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setDataImage(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("hhh", dataImage);
  return (
    <div className="lg:container lg:mx-auto mt-8 mb-10 grid grid-cols-5 gap-4">
      <div className="col-span-2 row-span-2 w-full border-solid border-2 border-gray-200">
        <img src={images1} alt="images" />
      </div>
      <div className="w-full  border-solid border-2 border-gray-200">
        <img src={images2} alt="images" />
      </div>
      <div className="w-full  border-solid border-2 border-gray-200">
        <img src={images2} alt="images" />
      </div>
      <div className="w-full  border-solid border-2 border-gray-200">
        <img src={images2} alt="images" />
      </div>
      <div className="w-full border-solid border-2 border-gray-200">
        <img src={images2} alt="images" />
      </div>
      <div className="w-full border-solid border-2 border-gray-200">
        <img src={images2} alt="images" />
      </div>
      <div className="w-full border-solid border-2 border-gray-200">
        <img src={images2} alt="images" />
      </div>
      <div className="w-full border-solid border-2 border-gray-200">
        <img src={images2} alt="images" />
      </div>
      <div className="w-full border-solid border-2 border-gray-200">
        <img src={images2} alt="images" />
      </div>
      <div className="w-full border-solid border-2 border-gray-200">
        <img src={images2} alt="images" />
      </div>
      <div className="w-full border-solid border-2 border-gray-200">
        <img src={images2} alt="images" />
      </div>
      <div className="w-full border-solid border-2 border-gray-200">
        <img src={images2} alt="images" />
      </div>
    </div>
  );
};

export default HomePage;
