import { useEffect } from "react";
import { useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const url = "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    /*
    fetch then 버전
     fetch(url)
     .then((res)=> res.json())
     .then((data)=> setMovies(data.data.movies))
    */

    const getMovies = async () => {
        const response = await fetch(url)
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false)
        console.log(json)
    }
    useEffect(() => {
        getMovies();
    }, [])
    return (
        <div className="App">
            {
                loading ?
                    <h1>Loading...</h1>
                    : movies.map((movie) => {
                        return (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}
                            />
                        )
                    })}
            <ul>

            </ul>
        </div>
    );
}

export default Home;