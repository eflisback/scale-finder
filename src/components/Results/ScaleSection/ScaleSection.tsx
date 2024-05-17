import styles from "./ScaleSection.module.css";

interface IProps {
  categoryTitle: string;
  scales: Scale[];
}

export default function ScaleSection({ categoryTitle, scales }: IProps) {
  return (
    <>
      <span className={styles.categoryTitle}>{categoryTitle}</span>
      <div className={styles.scales}>
        {scales.length !== 0 ? (
          scales.map((scale, index) => (
            <div key={index} className={styles.scale}>
              {scale.annotation} {scale.type.name}
            </div>
          ))
        ) : (
          <span className={styles.noMatches}>
            No matching {categoryTitle.toLowerCase()} found...
          </span>
        )}
      </div>
    </>
  );
}
