import React from "react";

const Order = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-3  rounded-2xl p-4">
      <div className="w-full flex items-center justify-between">
        {/* Left */}
        <h1 className="text-2xl text-black">Orders</h1>

        {/* Right */}
        <div className="flex items-center gap-4">
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

      <div className="h-24 w-56 bg-blue-100 text-black flex flex-col items-center justify-center rounded-xl">
        <span className="text-sm">Total Orders</span>
        <span className="text-xl font-bold">0</span>
      </div>

      <div className="h-24 w-56 bg-gray-100 text-black flex flex-col items-center justify-center rounded-xl">
        <span className="text-sm">Delivered Orders</span>
        <span className="text-xl font-bold">0</span>
      </div>

      <div className="h-24 w-56 bg-teal-100 text-black flex flex-col items-center justify-center rounded-xl">
        <span className="text-sm">Shipped Orders</span>
        <span className="text-xl font-bold">0</span>
      </div>

      <div className="h-24 w-56 bg-purple-100 text-black flex flex-col items-center justify-center rounded-xl">
        <span className="text-sm">New Orders</span>
        <span className="text-xl font-bold">0</span>
      </div>

      <div className="h-24 w-56 bg-yellow-100 text-black flex flex-col items-center justify-center rounded-xl">
        <span className="text-sm">Cancelled Orders</span>
        <span className="text-xl font-bold">0</span>
      </div>
      <div className="h-24 w-56 bg-green-200 text-black flex flex-col items-center justify-center rounded-xl">
        <span className="text-sm">Return Requests</span>
        <span className="text-xl font-bold">0</span>
      </div>

      <div className="h-24 w-56 bg-pink-100 text-black flex flex-col items-center justify-center rounded-xl">
        <span className="text-sm">Resolved Requests</span>
        <span className="text-xl font-bold">0</span>
      </div>
    </div>
  );
};

export default Order;
