import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Movie from "../components/Movie";


function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    const getMovie = async () => {
        const json = await (await fetch(url)).json();
        console.log(json.data.movie)
        setMovie(json.data.movie)
    }
    useEffect(() => {
        getMovie()
    })
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
}

export default Detail