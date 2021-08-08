import { useState } from "react";
import styles from "../styles/About.module.css";

function Page({ stars }) {
  const [value, setValue] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif"
  );
  const [i, setI] = useState(0);

  return (
    <div className={styles.container}>
      <img src={value} />
      <button onClick={() => setValue(stars)} />
      <p>{stars}</p>
    </div>
  );
}

Page.getInitialProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/3/");
  const json = await res.json();

  return {
    stars:
      json.sprites.versions["generation-v"]["black-white"].animated
        .back_default,
  };
};

export default Page;
