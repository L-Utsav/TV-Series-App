export interface Result {
    original_name: string;
    origin_country: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    genre_ids: number[];
    name: string;
    vote_average: number;
    overview: string;
    first_air_date: string;
  }
  
  export interface IMovie {
    page: number;
    total_results: number;
    total_pages: number;
    results: Result[];
  }
  