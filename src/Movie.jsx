

const Movie = ({ title, releaseDate }) => {
    return (
        <div>
            <h3>{title}</h3>
            <h4>Released in {releaseDate}</h4>
        </div>
    );
}

export default Movie