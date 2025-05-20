import React from "react";
import CardSlider from "./CardSlider";

const sampleData = [
  {
    image:
      "https://static.horiba.com/fileadmin/Horiba/_processed_/d/d/csm_HORIBA_Medial_Coagulation_Analysis_Yumizen_G800_Picture_c564a728df.jpg",
    title: "Yumizen G800",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Placeholder Device 1",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Placeholder Device 2",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Placeholder Device 3",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Placeholder Device 3",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Placeholder Device 3",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Placeholder Device 3",
  },
];

const HomePage = () => {
  return <CardSlider items={sampleData}  />
};

export default HomePage;
