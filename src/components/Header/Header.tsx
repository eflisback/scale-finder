import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <span>Simple Scale Finder</span>
      <span className={styles.credits}>
        , by <span className={styles.gradient}>eflisback</span>
      </span>
    </div>
  );
}
