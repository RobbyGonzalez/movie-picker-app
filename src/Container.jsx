import './css/Container.css';
import Genre from "./Genre";

function App() {
  return (
    <div className="Container">
      <h1>Movie App</h1>
      <div className='genreWrapper'>
        <Genre
          name="Romance"
          descrption={`The romance genre is a type of storytelling that focuses on love and romantic relationships between characters.`}
          movieTitle1="The Notebook"
          movieTitle2="A Star is Born"
          year1="2004"
          year2="2018"
        />
        <Genre
          name="Comdey"
          descrption={`The comedy genre emphasizes on humor. These films are designed to make the audience laugh in amusement.`}
          movieTitle1="Spaceballs"
          movieTitle2="Monty Python and the Holy Grail"
          year1="1987"
          year2="1975"
        />
      </div>
    </div>
  );
}

export default App;
