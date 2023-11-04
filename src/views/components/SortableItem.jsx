import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";
const SortableItem = (props) => {
  const { imageData, index, id } = props;
  const [selectedImages, setSelectedImages] = useState({}); // Initialize as an empty object

  const [hoveredImage, setHoveredImage] = useState(null);
  const handleImageClick = (imageSrc) => {
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [imageSrc]: !prevSelectedImages[imageSrc],
    }));
  };
  console.log("imageDatasss:", imageData);
  console.log("index:", index);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={`relative overflow-hidden w-full border-solid border-2 rounded-md border-gray-200 ${
        index === 0 ? "col-span-2 row-span-2" : ""
      } ${
        (hoveredImage === imageData.id || selectedImages[imageData.id]) &&
        "opacity-50"
      }`}
      onMouseEnter={() => setHoveredImage(imageData.id)}
      onMouseLeave={() => setHoveredImage(null)}
    >
      <div
        {...listeners}
        className={`absolute w-full h-full bg-[#9c9898] top-0 ${
          hoveredImage === imageData.image ? "opacity-50" : "opacity-0"
        } max-w-xl transition duration-500 ease-in-out`}
      ></div>
      <img
        src={imageData.image}
        className="w-full h-full"
        alt={`Image ${index}`}
        onClick={() => handleImageClick(imageData.id)}
      />
      {(hoveredImage === imageData.id || selectedImages[imageData.id]) && (
        <label
          className="absolute top-0 left-0 mt-2 ml-2 bg-transparent"
          style={{ padding: "4px" }}
        >
          <input
            type="checkbox"
            checked={selectedImages[imageData.id]}
            className="mr-2 bg-transparent"
            onChange={() => handleImageClick(imageData.id)}
          />
          Select
        </label>
      )}
    </div>
  );
};

export default SortableItem;
