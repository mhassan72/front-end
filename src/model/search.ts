import { reactive } from "vue";

export interface CastMember {
    name: string;
    image: string;
    role: string;
}
  
export interface SearchResult {
    title: string;              // Movie title
    id: string;                 // IMDb ID or other unique identifier
    poster_path: string;             // Poster image URL
    year: string;               // Year of release
    cast: CastMember[];         // List of cast members
    country: string[];          // List of countries
    directors: string[];        // List of directors
    genres: string[];           // List of genres
    languages: string[];        // List of languages
    plot: string;               // Plot summary
    rating: string;             // Movie rating
    runtime: string[];          // List of runtimes (array of strings, could be in minutes)
    votes: string;              // Total number of votes
    writers: string[];          // List of writers
}
  

export const search = reactive({
    term: '',
    loading: false,
    browse: true,
    search: false,
    results: [] as SearchResult[]
})