"use client";
import Loading from "@/components/Loading";
import MyImageCard from "@/components/MyImageCard";
import { nextPublicApiUrl } from "@/constants/constants";
import useFetchMovieById from "@/hooks/use-fetch-movie-by-id";
import { convertMinutesToHoursAndSeconds } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  params: { id: string };
}

const MovieByIdPage = ({ params }: Props) => {
  const { error, loading, movie } = useFetchMovieById({
    id: params.id,
  });

  if (error) return <div className="text-3xl text-red-700">Error</div>;
  if (loading) return <Loading />;

  console.log(movie);
  const id = params.id;
  const duration = convertMinutesToHoursAndSeconds(movie.runtime);
  const LinkByCat = () => {
    return movie.categories
      .map((m) => m.category.name)
      .map((cat) => (
        <span key={cat}>
          <Link
            title={`go ${cat}`}
            className="hover:text-white"
            href={`/movie?category=${cat}`}
          >
            {cat}
          </Link>
          ,&nbsp;
        </span>
      ));
  };

  return (
    <div className="flex flex-col  sm:flex-row items-center sm:items-start ">
      <div className="max-w-[400px] w-[210px] xs:w-[300px]  sm:w-[400px] py-8 px-12 rounded-md">
        <MyImageCard asImage movie={movie} customClassName="rounded-lg" />
      </div>
      <div className="py-8 flex flex-col sm:max-w-[50%] max-w-[70%]">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-sm font-light text-slate-500">
          Directed by {movie.director}
        </p>
        <p>
          {movie.release_year}&nbsp;&nbsp;&nbsp; {duration.hours}h&nbsp;
          {duration.minutes}m
        </p>
        <p className="text-sm font-light text-slate-500">{LinkByCat()}</p>
        <p>rating : {movie.rating}</p>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieByIdPage;
