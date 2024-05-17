import { useEffect, useState } from "react";
import { getNoteAnnotation } from "./util/translateNotes";

// Components
import Header from "./components/Header/Header";
import NoteEntry from "./components/NoteEntry/NoteEntry";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";

const scaleTypes: ScaleType[] = [
  {
    name: "Major",
    sequence: [2, 2, 1, 2, 2, 2],
  },
  {
    name: "Natural minor",
    sequence: [2, 1, 2, 2, 1, 2],
  },
  {
    name: "Harmonic minor",
    sequence: [2, 1, 2, 2, 3, 1],
  },
];

function generateScale(startNote: number, sequence: number[]): number[] {
  return sequence.reduce(
    (acc, num) => [...acc, (acc.slice(-1)[0] + num) % 12],
    [startNote]
  );
}

function generateAllScales(): Scale[] {
  const scales: Scale[] = [];

  for (let i = 0; i < 12; i++) {
    for (const scaleType of scaleTypes) {
      const scale = generateScale(i, scaleType.sequence);
      scales.push({
        notes: scale,
        annotation: getNoteAnnotation(i)[0],
        type: scaleType,
      });
    }
  }

  return scales;
}

function getMatchingScales(allScales: Scale[], notes: number[]): Scale[] {
  return allScales.filter((scale) =>
    notes.every((note) => scale.notes.includes(note))
  );
}

function App() {
  const [notes, setNotes] = useState<number[]>([]);
  const [matchingScales, setMatchingScales] = useState<Scale[]>([]);
  const [allScales, setAllScales] = useState<Scale[]>([]);

  useEffect(() => {
    setAllScales(generateAllScales());
  }, []);

  useEffect(() => {
    setMatchingScales(getMatchingScales(allScales, notes));
  }, [notes, allScales]);

  return (
    <main>
      <Header />
      <NoteEntry notes={notes} setNotes={setNotes} />
      <Results matchingScales={matchingScales} />
      <Footer />
    </main>
  );
}

export default App;
