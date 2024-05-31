import css from "./MovieInfo.module.css";
export default function MovieInfo({ movie }) {
  const genres = movie.genres;

  return (
    <div className={css.container}>
      <div>
        {movie.poster_path ? (
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}
  `}
            alt={`poster ${movie.title}`}
          />
        ) : (
          <div>{movie.title}</div>
        )}
      </div>
      <div className={css.infoCont}>
        <h1 className={css.title}>
          {movie.original_title} ({movie.release_date})
        </h1>
        <p className={css.page}>User Score: {movie.vote_average}</p>
        <h2 className={css.titleOverview}>Overview</h2>
        <p className={css.overview}>{movie.overview}</p>
        <h2 className={css.genres}>Genres</h2>
        <ul className={css.linksGenre}>
          {genres.map((genre) => (
            <li key={genre.id} className={css.link}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
