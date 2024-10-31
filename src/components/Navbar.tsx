"use client";

import { nextPublicBaseUrl } from "@/constants/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  MouseEventHandler,
  useState,
} from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigation = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchMovie = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    callback?: () => void
  ) => {
    navigation.push(`/movie?title=${searchTerm}`);
    if (callback && typeof callback === "function") callback();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    callback?: () => void
  ) => {
    if (event.key === "Enter") {
      navigation.push(`/movie?title=${searchTerm}`);
      if (callback && typeof callback === "function") callback();
    }
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Search Box */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
            className="px-3 py-1 rounded text-black  dark:text-white "
          />
          <button
            onClick={handleSearchMovie}
            className="ml-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Search
          </button>
        </div>

        {/* Menu for large screens */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/movie" className="hover:text-gray-300">
              All
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden transition-all ease-linear duration-1000 ">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 transition-all ease-linear duration-1000"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown for mobile */}
      {isOpen && (
        <div className="md:hidden animate-in transition-all ease-linear duration-1000">
          <div className="p-4">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={(e) => {
                handleKeyDown(e, toggleMenu);
              }}
              placeholder="Search..."
              className="px-3 py-1 w-full rounded text-black  dark:text-white"
            />
            <button
              onClick={(e) => {
                handleSearchMovie(e, toggleMenu);
              }}
              className="mt-2 w-full px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded"
            >
              Search
            </button>
          </div>
          <ul className="flex flex-col items-center bg-gray-700 space-y-4 py-4">
            <li>
              <Link
                href="/"
                onClick={toggleMenu}
                className="hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/movie"
                onClick={toggleMenu}
                className="hover:text-gray-300"
              >
                All
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
