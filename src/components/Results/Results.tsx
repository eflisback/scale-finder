import { useEffect, useState } from "react";
import styles from "./Results.module.css";
import { IoList } from "react-icons/io5";
import ScaleSection from "./ScaleSection/ScaleSection";

interface IProps {
  matchingScales: Scale[];
}

export default function Results({ matchingScales }: IProps) {
  const [basicScales, setBasicScales] = useState<Scale[]>([]);
  const [naturalMinorScales, setNaturalMinorScales] = useState<Scale[]>([]);
  const [harmonicMinorScales, setHarmonicMinorScales] = useState<Scale[]>([]);

  useEffect(() => {
    setBasicScales(
      matchingScales.filter((scale) => scale.type.name === "Major")
    );
    setNaturalMinorScales(
      matchingScales.filter((scale) => scale.type.name === "Natural minor")
    );
    setHarmonicMinorScales(
      matchingScales.filter((scale) => scale.type.name === "Harmonic minor")
    );
  }, [matchingScales]);

  return (
    <div className={styles.results}>
      <h3>
        <IoList /> Matching scales
      </h3>
      <div className={styles.scrollable}>
        <ScaleSection
          categoryTitle="Major scales"
          scales={basicScales}
          expandedByDefault
        />
        <ScaleSection
          categoryTitle="Natural minor scales"
          scales={naturalMinorScales}
          expandedByDefault
        />
        <ScaleSection
          categoryTitle="Harmonic minor scales"
          scales={harmonicMinorScales}
        />
      </div>
    </div>
  );
}
