import React, { useState } from "react";
import GlassesModel from "./components/GlassesModel";
const App = () => {
  const data = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./g1.jpg",
      image: "./v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 1. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./g2.jpg",
      image: "./v2.png",

      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 2. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./g3.jpg",
      image: "./v3.png",

      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 3. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./g4.jpg",
      image: "./v4.png",

      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 4. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./g5.jpg",
      image: "./v5.png",

      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 5. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./g6.jpg",
      image: "./v6.png",

      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 6. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./g7.jpg",
      image: "./v7.png",

      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 7. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./g8.jpg",
      image: "./v8.png",

      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 8. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./g9.jpg",
      image: "./v9.png",

      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  return (
    <div>
      <GlassesModel data={data}></GlassesModel>
    </div>
  );
};

export default App;
