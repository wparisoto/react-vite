
const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import "./MoviesGrid.css"

const Search = () => {
    const [searchParam] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParam.get("q")

    const getSearchedMovies = async (url) =>{
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results)
    };

    useEffect(() =>{
        const searchWithQueryURL = `${searchUrl}?${apiKey}&query=${query}`
        getSearchedMovies(searchWithQueryURL)
    }, [query])

    return (
        <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}></MovieCard> )}
            </div>
        </div>
    )
}

export default Search