"use client";

import MyMoviesCarousel from "@/components/MyMoviesCarousel";
import useFetchMovies from "@/hooks/use-fetch-movies";
import { MyButton } from "../shadcn/MyButton";
import { useRouter } from "next/navigation";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { nextPublicApiUrl, nextPublicBaseUrl } from "@/constants/constants";

export default function HomePage() {
  const { movies, loading, error } = useFetchMovies(
    `${nextPublicApiUrl}/movie`
  );
  const router = useRouter();

  if (error) return <div className="text-3xl text-red-700">Error</div>;
  if (loading) return <div className="text-3xl text-teal-600 ">Loading...</div>;

  const categories = movies.map((movie) => movie.category);

  const uniqueCategories = categories.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  return (
    <div className="container mx-auto px-2 xs:px-3 md:px-0  lg:px-4 md:mx-auto">
      {uniqueCategories.map((category) => (
        <div key={category} className="flex flex-col">
          <h3 className="text-lg ">
            <MyButton
              variant={"link"}
              onClick={() => {
                router.push(`${nextPublicBaseUrl}/movie?category=${category}`);
              }}
              className="pl-0 text-xl"
              title={`Go to movies by ${category} category`}
            >
              {category} <FaArrowAltCircleRight />
            </MyButton>
          </h3>

          <div className="flex justify-center w-full">
            <MyMoviesCarousel category={category} />
          </div>
        </div>
      ))}
    </div>
  );
}
