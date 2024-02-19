import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [liked, setLiked] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [liked3, setLiked3] = useState(false);
  const [album, setAlbum] = useState({
    name: "",
    releaseDate: "",
    coverArt: "",
  });
  const [albumList, setAlbumList] = useState([]);

  function toggle() {
    setLiked(!liked);
  }

  function toggle2() {
    setLiked2(!liked2);
  }
  function toggle3() {
    setLiked3(!liked3);
  }

  function handleInput(e) {
    setAlbum(album => ({
      ...album,
      [e.target.name]: e.target.value,
    }));
    console.log(album);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAlbumList([...albumList, album]);
    console.log(albumList);
  }

  return (
    <div>
      <div>
        <h1>Post Malone</h1>
        <h2>Music type: Hip-hop</h2>
        <p>
          Austin Richard Post (born July 4, 1995), known professionally as Post
          Malone, is an American rapper, singer, songwriter, and record
          producer. Known for his variegated vocals, Malone has gained acclaim
          for blending genres and subgenres of hip-hop, pop, RnB, and trap. His
          stage name was derived from inputting his birth name into a rap name
          generator.
        </p>
        <div>
          <h3>AUSTIN</h3>
          <p>2023</p>
          <img src="https://www.horizonsmusic.co.uk/cdn/shop/files/220713-PLxPM-Austin-CD-Front.jpg?v=1690282289"></img>
          <button
            onClick={toggle}
            className={`liked-button-1 ${liked ? "green" : "white"}`}
          >
            Like
          </button>
        </div>
        <div>
          <h3>Hollywood's Bleeding</h3>
          <p>2019</p>
          <img src="https://media.pitchfork.com/photos/629a1d0bec6d212a5b6b705e/master/w_1280%2Cc_limit/Post-Malone-Hollywoods-Bleeding.jpg"></img>
          <button
            onClick={toggle2}
            className={`liked-button-2 ${liked2 ? "green" : "white"}`}
          >
            Like
          </button>
        </div>
        <div>
          <h3>Beer Bongs and Bentleys</h3>
          <p>2018</p>
          <img src="https://www.horizonsmusic.co.uk/cdn/shop/products/1_bfbe28cf-666f-4706-a220-0bb9432de48a.jpg?v=1637415217"></img>
          <button
            onClick={toggle3}
            className={`liked-button-3 ${liked3 ? "green" : "white"}`}
          >
            Like
          </button>
        </div>
        {albumList.map(album => (
          <div>
            <h3>{album.name}</h3>
            <p>{album.releaseDate}</p>
            <img src={album.coverArt}></img>
            <button
              onClick={toggle3}
              className={`liked-button-3 ${liked3 ? "green" : "white"}`}
            >
              Like
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleInput} />
        <input type="text" name="releaseDate" onChange={handleInput} />
        <input type="text" name="coverArt" onChange={handleInput} />
        <button type="stubmit">Add</button>
      </form>
    </div>
  );
}

export default App;
