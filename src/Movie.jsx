

const Movie = ({ title1, releaseDate1, title2, releaseDate2 }) => {
    return (
        <div>
            <h3>{title1}, released in {releaseDate1}</h3>
            <h3>{title2}, released in {releaseDate2}</h3>
        </div>
    );
}

export default Movie