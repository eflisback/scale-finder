import { useEffect, useState } from "react";
import { getNoteAnnotation } from "./util/translateNotes";

// Components
import Header from "./components/Header/Header";
import NoteEntry from "./components/NoteEntry/NoteEntry";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";

const scaleSequences: ScaleType[] = [
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
    (scale, interval) => [...scale, (scale[scale.length - 1] + interval) % 12],
    [startNote]
  );
}

function getMatchingScales(notes: number[]): Scale[] {
  const scales: Scale[] = [];

  for (let i = 0; i < 12; i++) {
    for (const scaleSequence of scaleSequences) {
      const scale = generateScale(i, scaleSequence.sequence);

      if (notes.every((note) => scale.includes(note))) {
        scales.push({
          annotation: getNoteAnnotation(i),
          type: {
            name: scaleSequence.name,
            sequence: scaleSequence.sequence,
          },
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
      <NoteEntry setNotes={setNotes} />
      <Results matchingScales={matchingScales} />
      {/*       {notes.map((note) => (
        <div key={note}>{note}</div>
      ))} */}
      <Footer />
    </main>
  );
}

export default App;
