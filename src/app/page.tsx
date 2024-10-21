import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BreadcrumbItemType, MyBreadcrumb } from "./shadcn/MyBreadcrumb";
import { useState } from "react";
import MyImageCard from "@/components/MyImageCard";

import { MyCarousel } from "./shadcn/MyCarousel";
import MyMoviesCarousel from "@/components/MyMoviesCarousel";
import Link from "next/link";
import { MyButton } from "./shadcn/MyButton";

export const breadcrumbItems: BreadcrumbItemType[] = [
  {
    href: "/",
    label: "Home",
  },
  { href: "/all", label: "All" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:container md:mx-auto">
      <h1>hello</h1>
      <div className="h-3 "></div>

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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-4">
        <MyImageCard customClassName=" w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]" />
        <MyImageCard customClassName=" w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]" />
        <MyImageCard customClassName=" w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]" />
        <MyImageCard customClassName=" w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]" />
        <MyImageCard customClassName=" w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]" />
        <MyImageCard customClassName=" w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]" />
        <MyImageCard customClassName=" w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]" />
        <MyImageCard customClassName=" w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]" />
        <MyImageCard customClassName=" w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]" />
        <MyImageCard customClassName=" w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]" />
      </div>
    </div>
  );
}
