import React from "react";

export default function TopCards(props) {
  const {title} = props;
  return (
    <div className="">
      <div className="grid lg:grid-cols-2 gap-4 p-4">
        <h1 className="flex items-center text-2xl font-bold dark:text-black">
          {title}
          <span className="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            BI
          </span>
        </h1>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}
