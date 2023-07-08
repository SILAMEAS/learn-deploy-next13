import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="mt-10 mx-auto w-[50%] space-x-4 ">
      <button className="bg-blue-500 px-2 rounded hover:bg-red-900 hover:rounded-none">
        <Link href={"/"}> HOME </Link>
      </button>
      <button className="bg-blue-500 px-2 rounded hover:bg-red-900 hover:rounded-none">
        <Link href={"/about/us"}> About us </Link>
      </button>
      <button className="bg-blue-500 px-2 rounded hover:bg-red-900 hover:rounded-none">
        <Link href={"/about/we"}> About we </Link>
      </button>
      <button className="bg-blue-500 px-2 rounded hover:bg-red-900 hover:rounded-none">
        <Link href={"/about/12"}> About by Id </Link>
      </button>
      <button className="bg-blue-500 px-2 rounded hover:bg-red-900 hover:rounded-none">
        <Link href={"/listPost"}> Get Posts </Link>
      </button>
    </div>
  );
}
