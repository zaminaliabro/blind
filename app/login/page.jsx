"use client";

import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f0ff]">
      <div className="w-full max-w-5xl flex rounded-2xl overflow-hidden shadow-2xl">
        <div className="w-1/2 bg-white p-10 flex flex-col justify-center items-center">
          <h1 className="text-2xl text-black font-bold mb-2">LOGIN</h1>
          <p className="text-black mb-6">
            How to get started lorem ipsum dolor at?
          </p>

          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <div className="bg-white rounded-lg px-4 py-3 flex items-center border">
              <input
                type="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className=" outline-none w-full text-black "
              />
            </div>

            <div className=" rounded-lg px-4 py-3 flex items-center">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" outline-none w-full text-black "
              />
            </div>

            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-black py-2 rounded-lg shadow-md hover:opacity-90 transition"
            >
              Login Now
            </button>
          </form>

          <div className="my-6 w-full flex items-center">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-3  text-black">Login with Others</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <button className="border rounded-lg py-2 text-black hover:bg-gray-50">
              Login with Google
            </button>
            <button className="border rounded-lg py-2 text-black hover:bg-gray-50">
              Login with Facebook
            </button>
          </div>
        </div>

        <div className="w-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center relative p-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <Image
              src="data:image/jpeg;base64,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"
              alt="Login"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
