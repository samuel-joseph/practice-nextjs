import styles from "../styles/About.module.css";
import router from "next/router";

export default function About() {
  return (
    <div className={styles.container}>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      About
    </div>
  );
}
