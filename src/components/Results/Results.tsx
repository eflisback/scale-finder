import styles from "./Results.module.css";

interface IProps {
  matchingScales: Scale[];
}

export default function Results({ matchingScales }: IProps) {
  return (
    <div className={styles.results}>
      <div className={styles.scales}>
        {matchingScales.length !== 0 ? (
          matchingScales.map((scale, index) => (
            <div key={index} className={styles.scale}>
              {scale.annotation} {scale.type.name}
            </div>
          ))
        ) : (
          <span className={styles.noMatches}>No matches found</span>
        )}
      </div>
    </div>
  );
}
