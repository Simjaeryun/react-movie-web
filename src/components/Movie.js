import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div className="movie_card">
            <img src={coverImg} alt="영화이미지" />
            <h1>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h1>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => {
                    return (
                        <li key={g}>{g}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Movie