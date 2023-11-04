import React, { useState } from "react";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableItem from "../components/SortableItem";

const HomePage = () => {
  const [dataImage, setDataImage] = useState([
    {
      id: "6542122114bd17dd60520932",
      image: "../../../src/assets/images/image-1.webp",
    },
    {
      id: "65421221360151f6314eef3d",
      image: "../../../src/assets/images/image-10.jpeg",
    },
    {
      id: "65421221a96c7c915bfa2b0f",
      image: "../../../src/assets/images/image-11.jpeg",
    },
    {
      id: "6542122191e8ab4c3a855218",
      image: "../../../src/assets/images/image-2.webp",
    },
    {
      id: "65421221948499352502c2b4",
      image: "../../../src/assets/images/image-3.webp",
    },
    {
      id: "65421221f868c5f417cc3726",
      image: "../../../src/assets/images/image-4.webp",
    },
    {
      id: "65421221cba2633496648a95",
      image: "../../../src/assets/images/image-5.webp",
    },
    {
      id: "65421221b33ee6c33702ahghf84",
      image: "../../../src/assets/images/image-6.webp",
    },
    {
      id: "65421221b33ee6c33702a55f84",
      image: "../../../src/assets/images/image-7.webp",
    },
    {
      id: "65421221b33ee6c3370552af84",
      image: "../../../src/assets/images/image-8.webp",
    },
    {
      id: "65421221b33ee6c3370r2af894",
      image: "../../../src/assets/images/image-9.webp",
    },
  ]);
  const [selectedImages, setSelectedImages] = useState({}); // Initialize as an empty object

  const [hoveredImage, setHoveredImage] = useState(null);

  /*   const getData = () => {
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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []); */

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log("hactivee:>>>>>", active);
    console.log("overxx>>>>:", over.id.id);

    if (active.id.id !== over.id.id) {
      setDataImage((items) => {
        console.log("xxx++++", items);
        const preIndex = items.findIndex((item) => item.id === active.id);
        const nextIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, preIndex, nextIndex);
      });
    }
  };
  console.log("xxx", dataImage);
  return (
    <div className="bg-white lg:container lg:mx-auto mt-8 mb-16">
      <div className="flex justify-between mt-6">
        <p className="ml-6 mt-6">3 files selected</p>
        <button className="text-[red] font-bold mr-6 mt-6" type="button">
          Delete Files
        </button>
      </div>
      <div className="h-1 w-full border-b-[1px] border-black mb-12 "></div>

      {/*   <div className="lg:container lg:mx-auto mt-8 mb-10 grid grid-cols-5 gap-4 p-8 relative "></div> */}
      <div className="lg:container lg:mx-auto mt-8 mb-10 grid grid-cols-5 gap-4 p-8 relative ">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={dataImage}
            strategy={verticalListSortingStrategy}
          >
            {dataImage.length > 0 &&
              dataImage.map((imageData, index) => (
                <SortableItem
                  key={imageData}
                  id={imageData}
                  index={index}
                  imageData={imageData}
                />
              ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );

  /*  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setDataImage((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  } */
};

export default HomePage;
