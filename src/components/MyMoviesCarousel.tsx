"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MyImageCard from "./MyImageCard";
import { useState } from "react";
import useFetchMovies from "@/hooks/use-fetch-movies";
import { Movie } from "@/Api";
//sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5

interface Props {
  category: string;
}
const MyMoviesCarousel = ({ category }: Props) => {
  const { movies, loading, error } = useFetchMovies(
    `http://localhost:3000/api/movie?category=${category || ""}`
  );

  if (error) return <div className="text-3xl text-red-700">Error</div>;
  if (loading) return <div className="text-3xl text-teal-600 ">Loading...</div>;

  return (
    <Carousel
      opts={{
        // align: "start",
        slidesToScroll: "auto",
      }}
      className="w-full"
    >
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItem
            key={index}
            className={`basis-2/2 sm:basis-1/3 md:basis-1/4 lg:basis:1/5 xl:basis-1/5`}
          >
            <MyImageCard
              movie={movie}
              customClassName=" w-[150px] sm:w-[160px] md:w-[180px] lg:w-[220px]"
            />
          </CarouselItem>
        ))}

        <CarouselItem className="basis-2/2 sm:basis-1/3 md:basis-1/4 lg:basis:1/5 xl:basis-1/5">
          <MyImageCard
            isViewAll={true}
            customClassName=" w-[150px] sm:w-[160px] md:w-[180px] lg:w-[220px]"
          />
        </CarouselItem>
      </CarouselContent>
      <div className="flex justify-between">
        <CarouselPrevious className="absolute left-0 top-1/3 transform -translate-y-2/2 scale-150 " />
        <CarouselNext className="absolute right-0  top-1/3 transform -translate-y-2/2 scale-150" />
      </div>
      {/* <CarouselPrevious  />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default MyMoviesCarousel;
