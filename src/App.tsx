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
    sequence: [2, 2, 1, 2, 2, 2, 1],
  },
  {
    name: "Minor",
    sequence: [2, 1, 2, 2, 1, 2, 2],
  },
];

function generateScale(startNote: number, sequence: number[]): number[] {
  return sequence.reduce(
    (acc, num) => [...acc, (acc.slice(-1)[0] + num) % 12],
    [startNote]
  );
}

function getMatchingScales(notes: number[]): Scale[] {
  const scales: Scale[] = [];

  for (let i = 0; i < 12; i++) {
    for (const scaleType of scaleTypes) {
      const scale = generateScale(i, scaleType.sequence);

      if (notes.every((note) => scale.includes(note))) {
        scales.push({
          annotation: getNoteAnnotation(i)[0],
          type: scaleType,
        });
      }
    }
  }

  return scales;
}

function App() {
  const [notes, setNotes] = useState<number[]>([]);
  const [matchingScales, setMatchingScales] = useState<Scale[]>([]);

  useEffect(() => setMatchingScales(getMatchingScales(notes)), [notes]);

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
