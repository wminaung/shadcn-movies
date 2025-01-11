import { nextPublicApiUrl } from "@/constants/constants";
import { MovieResponse } from "@/types/base";
import { useEffect, useState } from "react";

interface Props {
  id: string;
}
const useFetchMovieById = ({ id }: Props) => {
  const [movie, setMovie] = useState<MovieResponse>({} as MovieResponse);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const res = await fetch(`${nextPublicApiUrl}/movie/${id}`);
        const data = await res.json();
        setMovie(data);
      } catch (error: unknown) {
        if (error instanceof Error) setError(error?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieById();
  }, [id]);

  return { movie, loading, error };
};

export default useFetchMovieById;
