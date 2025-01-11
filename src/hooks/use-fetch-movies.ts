// import apiService, { ApiService } from "@/lib/apiService";

import { nextPublicApiUrl } from "@/constants/constants";
import { Movie } from "@/core/entity/Movie";
import { GetAllMoviesOption } from "@/core/infrastructure/movie/IMovieRepository";
import { MovieResponse } from "@/types/base";
import { useEffect, useState } from "react";

const useFetchMovies = ({
  category,
  title,
  categoryId,
}: GetAllMoviesOption = {}) => {
  const [movies, setMovies] = useState<MovieResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const queryParams = new URLSearchParams({
          category: category || "",
          title: title || "",
          categoryId: categoryId || ``,
        });
        const res = await fetch(
          `${nextPublicApiUrl}/movie?${queryParams.toString()}`
        );
        const data = await res.json();
        setMovies(data);
      } catch (error: unknown) {
        if (error instanceof Error) setError(error?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category, title, categoryId]);

  return { movies, loading, error };
};

export default useFetchMovies;
