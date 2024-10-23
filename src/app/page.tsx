"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BreadcrumbItemType, MyBreadcrumb } from "./shadcn/MyBreadcrumb";
import { useEffect, useState } from "react";
import MyImageCard from "@/components/MyImageCard";
import { MyCarousel } from "./shadcn/MyCarousel";
import MyMoviesCarousel from "@/components/MyMoviesCarousel";
import Link from "next/link";
import { MyButton } from "./shadcn/MyButton";
import MyNavigationMenu from "./shadcn/MyNavigationMenu";
import Navbar from "@/components/Navbar";
import { Movie, movies } from "@/Api";
import useFetchMovies from "@/hooks/use-fetch-movies";

export const breadcrumbItems: BreadcrumbItemType[] = [
  {
    href: "/",
    label: "Home",
  },
  { href: "/all", label: "All" },
];

export default function Home() {
  const { movies, loading, error } = useFetchMovies(
    "http://localhost:3000/api/movie"
  );

  const categories = movies.map((movie) => movie.category);

  const uniqueCategories = categories.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  return (
    <div className="container mx-auto px-3 md:mx-auto">
      {uniqueCategories.map((category) => (
        <div key={category} className="flex flex-col">
          <h3 className="text-lg ">
            <MyButton variant={"link"} className=" pl-0">
              {category} &gt;
            </MyButton>
          </h3>

          <div className="flex justify-center w-full">
            <MyMoviesCarousel category={category} />
          </div>
        </div>
      ))}

      {/* <div className="flex flex-col">
        <h3 className="text-lg ">
          <MyButton variant={"link"} className=" pl-0">
            Fantacy &gt;
          </MyButton>
        </h3>

        <div className="flex justify-center w-full">
          <MyMoviesCarousel />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg ">
          <MyButton variant={"link"} className=" pl-0">
            Fantacy &gt;
          </MyButton>
        </h3>

        <div className="flex justify-center w-full">
          <MyMoviesCarousel />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg ">
          <MyButton variant={"link"} className=" pl-0">
            Fantacy &gt;
          </MyButton>
        </h3>

        <div className="flex justify-center w-full">
          <MyMoviesCarousel />
        </div>
      </div> */}

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-4">
        {movies?.map((movie) => (
          <MyImageCard
            key={movie.id}
            movie={movie}
            customClassName=" w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]"
          />
        ))}
      </div> */}
    </div>
  );
}
