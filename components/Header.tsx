import Link from "next/link";
import React from "react";
import DarkModeToggleButton from "./DarkModeToggleButton";

function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          ></Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className=" ml-5 hover:text-gray-900">
              홈
            </Link>
            <Link href="projects" className=" ml-5 hover:text-gray-900">
              프로젝트
            </Link>

            <Link href="career" className=" ml-5 hover:text-gray-900">
              업무 경험
            </Link>
          </nav>
          {/* <DarkModeToggleButton /> */}
        </div>
      </header>
    </>
  );
}

export default Header;
