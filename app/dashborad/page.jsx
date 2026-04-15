import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-6 boder radius-2xl">
      <div className="w-full flex items-center justify-between">
        {/* Left */}
        <h1 className="text-2xl text-black">Dashboard</h1>

        {/* Middle + Right */}
        <div className="flex items-center gap-4 ml-60">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400">
            icon
          </button>

          <button className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Login
          </button>
        </div>
      </div>
      <div className="h-30 w-60 bg-pink-500 text-white flex items-center justify-center rounded-lg text-2xl font-bold">
        Order
      </div>

      <div className="h-30 w-60 bg-blue-500 text-white flex items-center justify-center rounded-lg text-2xl font-bold">
        Product
      </div>

      <div className="h-30 w-60 bg-blue-500 text-white flex items-center justify-center rounded-lg text-2xl font-bold">
        Customer
      </div>
    </div>
  );
};

export default Dashboard;
