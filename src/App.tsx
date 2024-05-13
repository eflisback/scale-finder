import { useEffect, useState } from "react";

// Components
import Header from "./components/Header/Header";
import NoteEntry from "./components/NoteEntry/NoteEntry";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";

function getMatchingScales(notes: number[]): Scale[] {
  console.log(notes);
  return [];
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
      {notes.map((note) => (
        <div key={note}>{note}</div>
      ))}
      <Footer />
    </main>
  );
}

export default App;
