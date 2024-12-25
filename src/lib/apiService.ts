import { nextPublicApiUrl } from "@/constants/constants";
import { Movie } from "@prisma/client";

// Declare the class first

export class ApiService {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  public async getMovieById({ id }: ApiService.getMovieByIdParam) {
    const url = `/movie/${id}`;
    return await this.fetchData<Movie>({ url });
  }

  public async getMovies(searchParam: ApiService.GetMoviesParam) {
    const url = `/movie?title=${searchParam.title || ""}&category=${
      searchParam.category || ""
    }`;
    return await this.fetchData<Movie[]>({ url });
  }

  private async fetchData<T extends object>({
    url,
    method = ApiService.HttpMethod.GET,
    contentType = ApiService.ContentType.JSON,
    options,
  }: ApiService.FetchDataParam): Promise<T> {
    try {
      const response = await fetch(`${this.apiUrl}${url}`, {
        method,
        headers: {
          "Content-Type": contentType,
          ...options?.headers,
        },
        ...options,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
}

// Declare the namespace after the class
export namespace ApiService {
  export interface GetMoviesParam {
    title?: string;
    category?: string;
  }
  export interface getMovieByIdParam {
    id: string;
  }
  export interface MoviePayload extends Omit<Movie, "id"> {}
  export interface PostMovieParam {
    data: MoviePayload;
  }
  export interface PutMovieByIdParam {
    id: string;
    data: Movie;
  }
  export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
  }

  export enum ContentType {
    JSON = "application/json",
    TEXT = "text/plain",
    FORM = "application/x-www-form-urlencoded",
  }

  export interface FetchDataParam {
    url: string;
    method?: HttpMethod;
    contentType?: ContentType;
    options?: RequestInit;
  }

  // Export the instance type
  export type Instance = ApiService;
}

// Create an instance of the service
const apiService = new ApiService(nextPublicApiUrl);

export default apiService;
export type ApiServiceInstance = ApiService.Instance;
