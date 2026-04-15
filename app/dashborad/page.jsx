import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-6">
      <div className="h-40 w-60 bg-blue-500 text-white flex items-center justify-center rounded-lg text-2xl font-bold">
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
