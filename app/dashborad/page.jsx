import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-6 boder radius-2xl">
      <div className=" w-full">
        <input
          type="text"
          placeholder="Search..."
          className="border border-black-300 bg-black-  rounded-md py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-100 "
        />
        <button className="ml-30 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 ">
          login
        </button>
        <h1 className="text-2xl  text-black">Dashboard</h1>
      </div>
      <div className="h-40 w-60 bg-pink-500 text-white flex items-center justify-center rounded-lg text-2xl font-bold">
        Order
      </div>

      <div className="h-40 w-60 bg-blue-500 text-white flex items-center justify-center rounded-lg text-2xl font-bold">
        Product
      </div>

      <div className="h-40 w-60 bg-blue-500 text-white flex items-center justify-center rounded-lg text-2xl font-bold">
        Customer
      </div>
    </div>
  );
};

export default Dashboard;
