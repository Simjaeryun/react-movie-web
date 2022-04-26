function Movie({ coverImg, title, summary, genres }) {
    return (
        <div >
            <img src={coverImg} alt="영화이미지" />
            <h1>{title}</h1>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => {
                    return (
                        <li >{g}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Movie