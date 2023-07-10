import Movie from "./Movie"
import Card from "./Card";


const Genre = ({ name, descrption, movieTitle1, movieTitle2, year1, year2 }) => {
    return (
        <div>
            <Card>
                <h2>{name}</h2>
                <p>{descrption}</p>
                <Movie
                    title1={movieTitle1}
                    releaseDate1={year1}
                    title2={movieTitle2}
                    releaseDate2={year2}
                />
            </Card>
        </div>
    );
}

export default Genre