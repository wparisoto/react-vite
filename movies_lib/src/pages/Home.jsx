import { useEffect, useState } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) =>{
        const res = await fetch(url);
        const data = await res.json();


        setTopMovies(data.results)
    };

    useEffect(() =>{
        const topRateUrl = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRateUrl)
    }, [])

    return (
        <div>
            <div className="container">
                <h2 className="title">Melhores Filmes:</h2>
                <div className="movies-container">
                {topMovies.length > 0 && 
                        topMovies.map((movie) => <p>{movie.title}</p> )}
                </div>
            </div>
        </div>
    )
}

export default Home