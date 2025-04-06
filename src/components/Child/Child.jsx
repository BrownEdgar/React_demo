import styles from "./Child.module.css";

export default function Child({ elem }) {
  return (
    <div className={styles.Child}>
      <span>AXONVIP | 01 AUG, 2025</span>
      <h1>{elem.title}</h1>
      <p>{elem.text}</p>
      <button>Read more</button>
    </div>
  );
}
