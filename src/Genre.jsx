import Movie from "./Movie"

const Genre = ({ name, descrption, movieTitle, year }) => {
    return (
        <div>
            <h2>{name}</h2>
            <Movie
                title={movieTitle}
                releaseDate={year}
            />
            <p>{descrption}</p>
        </div>
    );
}

export default Genre