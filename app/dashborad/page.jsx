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
      <div className="h-30 w-55 bg-green-100 text-black flex flex-col items-center justify-center rounded-xl">
        <span className="text-sm">Total Revenue</span>
        <span className="text-xl font-bold">0</span>
      </div>

      <div className="h-30 w-55 bg-pink-100 text-black flex flex-col items-center justify-center rounded-xl">
        <span className="text-sm">Total Orders</span>
        <span className="text-xl font-bold">0</span>
      </div>

      <div className="h-30 w-55 bg-yellow-100 text-black flex flex-col items-center justify-center rounded-xl">
        <span className="text-sm">Total Customers</span>
        <span className="text-xl font-bold">0</span>
      </div>
      <div className="h-30 w-55 bg-red-100 text-black flex flex-col items-center justify-center rounded-xl">
        <span className="text-sm">Total Products</span>
        <span className="text-xl font-bold">0</span>
      </div>
    </div>
  );
};

export default Dashboard;
