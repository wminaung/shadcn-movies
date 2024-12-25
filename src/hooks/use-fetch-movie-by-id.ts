import apiService from "@/lib/apiService";
import { Movie } from "@prisma/client";
import { useEffect, useState } from "react";

interface Props {
  id: string;
}
const useFetchMovieById = ({ id }: Props) => {
  const [movie, setMovie] = useState<Movie>({} as Movie);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const data = await apiService.getMovieById({ id });
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
