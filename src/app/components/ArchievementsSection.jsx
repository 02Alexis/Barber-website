import React from "react";

const archievemtsList = [
  {
    metric: "haircuts",
    value: "1000+",
  },
  {
    metric: "Years",
    value: "5+",
  },
];

const ArchievementsSection = () => {
  return (
    <div
      className="
            py-8
            px-4
            xl:gap-16
            sm:py-16
            xl:px-16
        "
    >
      <div
        className="
                border-[#33353F]
                border
                rounded-md
                py-8
                px-17
                flex
                flex-row
                items-center
                justify-between
            "
      >
        {archievemtsList.map((archievement, index) => {
          return (
            <div
              key={index}
              className="
                flex
                flex-col
                items-center
                justify-center
                mx-4
            "
            >
              <h2 className="text-white text-4xl font-bold">
                {archievement.value}
              </h2>
              <p className="text-[#ADB7BE] text-base">{archievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArchievementsSection;
