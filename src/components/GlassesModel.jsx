import React, { useState } from "react";

function GlassesModel({ data }) {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleGlassesClick = (item) => {
    setSelectedGlasses(item);
  };

  return (
    <div className="  container-fluid mx-auto bg-blue-200 flex justify-center gap-10   h-lvh">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="relative">
          <img className="  " src="./public/model.jpg" alt="" />
          {selectedGlasses && (
            <div className=" p-3">
              <img
                className="w-[50%] absolute top-[25%] left-[122px] max-sm:top-[25%]  max-sm:left-[106px] "
                src={selectedGlasses.image}
                alt={selectedGlasses.name}
              />
              <div className=" ">
                <p className="absolute bottom-36 text-3xl font-semibold">
                  {selectedGlasses.name}
                </p>
                <p className="absolute bottom-14 text-xl text-gray-600">
                  {selectedGlasses.desc}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="mx-auto bg-white  ">
          <div className="flex items-center flex-wrap">
            {data.map((item, index) => (
              <div
                className="w-1/4 p-2 flex justify-center items-center"
                key={item.id}
                onClick={() => handleGlassesClick(item)}
              >
                <img
                  className="w-[70px] cursor-pointer"
                  src={item.url}
                  alt={item.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlassesModel;
