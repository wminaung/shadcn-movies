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
//sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
const MyMoviesCarousel = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
  ];

  return (
    <Carousel
      opts={{
        // align: "start",
        slidesToScroll: "auto",
      }}
      className="w-full"
    >
      <CarouselContent>
        {items.map((_, index) => (
          <CarouselItem
            key={index}
            className={`sm:basis-1/3 md:basis-1/4 lg:basis:1/5 xl:basis-1/5`}
          >
            <p>id: {_}</p>
            <MyImageCard customClassName=" w-[150px] sm:w-[180px] md:w-[200px8] lg:w-[220px]" />
          </CarouselItem>
        ))}

        <CarouselItem className="sm:basis-1/3 md:basis-1/4 lg:basis:1/5 xl:basis-1/5">
          <p>id: {"menu"}</p>{" "}
          <MyImageCard
            isViewAll={true}
            customClassName=" w-[150px] sm:w-[180px] md:w-[200px8] lg:w-[220px]"
          />
        </CarouselItem>
      </CarouselContent>
      <div className="flex justify-between">
        <CarouselPrevious className="absolute left-0 top-2/4 transform -translate-y-1/2 scale-150 " />
        <CarouselNext className="absolute right-0  top-2/4 transform -translate-y-1/2 scale-150" />
      </div>
      {/* <CarouselPrevious  />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default MyMoviesCarousel;
