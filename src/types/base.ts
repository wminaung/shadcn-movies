import { Category } from "@/core/entity/Category";
import { Movie } from "@/core/entity/Movie";

export interface ParamsProps {
  params: { id: string };
}

export interface MovieResponse extends Movie {
  categories: { category: Category }[];
}
