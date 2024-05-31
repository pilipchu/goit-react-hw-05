import { getSearchMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
//import css from "./MoviesPage.module.css";
export default function MoviesPage() {
  const [queryMovie, setQueryMovie] = useState("");
  const [dataMovies, setDataMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      if (queryMovie === "") {
        return;
      }
      try {
        setIsLoader(true);
        setIsError(false);
        const data = await getSearchMovies(queryMovie);
        setDataMovies(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    fetchMovies();
  }, [queryMovie]);

  const handleSearch = async (query) => {
    setQueryMovie(query);
    setDataMovies([]);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoader && <Loader />}
      {dataMovies.length > 0 && <MovieList movies={dataMovies} />}
      {isError && <ErrorMessage />}
    </div>
  );
}
