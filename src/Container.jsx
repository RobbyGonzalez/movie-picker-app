import './css/Container.css';
import Genre from "./Genre";

function App() {
  return (
    <div className="Container">
      <h1>Movie App</h1>
      <Genre
        name="Romance"
        descrption={`In "The Notebook," a passionate summer romance between Noah and Allie in the 1940s is hindered by their differing social backgrounds and the outbreak of World War II. Despite being separated and believing their love has faded, they are unexpectedly reunited years later, forcing them to confront their past choices and the enduring power of their love.`}
        movieTitle="The Notebook"
        year="2004"
      />
      <Genre
        name="Comdey"
        descrption={`In "Spaceballs," a comedic science fiction parody, the evil Dark Helmet, under the orders of President Skroob, plans to steal the atmosphere of the peaceful planet Druidia. Lone Starr, with the help of his half-dog companion Barf and the wise Yogurt, embarks on a hilarious adventure to rescue Princess Vespa and save Druidia from its impending doom. Packed with zany characters, clever spoofs, and absurd gags, "Spaceballs" offers a light-hearted and entertaining spoof of classic science fiction films.`}
        movieTitle="Spaceballs"
        year="1987"
      />
    </div>
  );
}

export default App;
