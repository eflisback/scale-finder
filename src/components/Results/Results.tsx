import styles from "./Results.module.css";

interface IProps {
  matchingScales: Scale[];
}

export default function Results({ matchingScales }: IProps) {
  return (
    <div className={styles.results}>
      {matchingScales.map((scale, index) => (
        <div key={index} className={styles.scale}>
          {scale.annotation} {scale.type.name}
        </div>
      ))}
    </div>
  );
}
