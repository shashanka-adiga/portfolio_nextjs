"use client";

import { HiOutlineMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="bg-slate-900 px-6 py-4 top-0 fixed w-full">
        {isOpen ? (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-full flex items-center justify-end"
          >
            <HiXMark className="  text-3xl text-white" />
          </div>
        ) : (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-full flex items-center justify-end"
          >
            <HiOutlineMenu className="  text-3xl text-white" />
          </div>
        )}

        {isOpen ? (
          <div className="md:hidden flex flex-col justify-center items-center text-slate-200 font-bold">
            <div onClick={() => setIsOpen(!isOpen)} className="hover:bg-slate-700 w-full flex items-center justify-center p-1">
              <Link className="w-[50px]" href={"/"}>
                home
              </Link>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="hover:bg-slate-700 w-full flex items-center justify-center p-1">
              <Link className="w-[50px]" href={"/projects"}>
                Projects
              </Link>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="hover:bg-slate-700 w-full flex items-center justify-center p-1">
              <Link className="w-[50px]" href={"/experience"}>
                Experience
              </Link>
            </div>
          </div>
        ) : (
          <div className=" hidden  md:flex justify-evenly items-center text-slate-200 text-xl font-bold">
            <div>
              <Link href={"/"}>home</Link>
            </div>
            <div>
              <Link href={"/projects"}>Projects</Link>
            </div>
            <div>
              <Link href={"/experience"}>Experience</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
