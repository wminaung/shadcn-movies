"use client";

import MyMoviesCarousel from "@/components/MyMoviesCarousel";
import useFetchMovies from "@/hooks/use-fetch-movies";
import { MyButton } from "../shadcn/MyButton";
import { useRouter } from "next/navigation";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { nextPublicApiUrl, nextPublicBaseUrl } from "@/constants/constants";
import Loading from "@/components/Loading";

export default function HomePage() {
  const { movies, loading, error } = useFetchMovies();
  const router = useRouter();

  if (error) return <div className="text-3xl text-red-700">Error</div>;
  if (loading) return <Loading />;

  const categories = movies.flatMap((movie) =>
    movie.categories.map((categoryObj) => categoryObj.category.name)
  );

  const uniqueCategories = [...new Set(categories)];

  return (
    <div className="container overflow-hidden mx-auto px-2 xs:px-3 md:px-0 transition-all lg:px-4 md:mx-auto">
      {uniqueCategories.map((category) => (
        <div key={category} className="flex flex-col transition-all">
          <h3 className="text-lg transition-all">
            <MyButton
              variant={"link"}
              onClick={() => {
                router.push(`/movie?category=${category}`);
              }}
              className="pl-0 text-xl"
              title={`Go to movies by ${category} category`}
            >
              {category} <FaArrowAltCircleRight />
            </MyButton>
          </h3>

          <div className="flex container justify-center">
            <MyMoviesCarousel allMovies={movies} category={category} />
          </div>
        </div>
      ))}
    </div>
  );
}
