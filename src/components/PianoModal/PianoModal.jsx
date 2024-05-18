import { useEffect, useState } from "react";
import styles from "./PianoModal.module.css";
import { RxCross2 } from "react-icons/rx";
import { Piano, MidiNumbers } from "react-piano";
import { getNoteValue } from "../../util/translateNotes";
import "react-piano/dist/styles.css";

export default function PianoModal({ isOpen, setIsOpen, scale }) {
  const [activeNotes, setActiveNotes] = useState([]);
  const intervalStart = MidiNumbers.fromNote("c3");
  const intervalEnd = MidiNumbers.fromNote("e5");

  useEffect(() => {
    let toBeActiveNotes = [];
    const startNote = getNoteValue(scale.annotations[0]) + 45;
    toBeActiveNotes.push(startNote);

    let current = startNote;
    for (const increment of scale.type.sequence) {
      current += increment;
      toBeActiveNotes.push(current);
    }

    if (toBeActiveNotes[0] < intervalStart) {
      toBeActiveNotes = toBeActiveNotes.map((number) => number + 12);
    } else if (toBeActiveNotes[toBeActiveNotes.length - 1] > intervalEnd) {
      toBeActiveNotes = toBeActiveNotes.map((number) => number - 12);
    }
    setActiveNotes(toBeActiveNotes);
  }, []);

  if (!isOpen) return;

  return (
    <div className={styles.background} onClick={() => setIsOpen(false)}>
      <div
        className={styles.modal}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className={styles.header}>
          <h3>
            {scale.annotations[0]} {scale.type.name}
          </h3>
          <RxCross2 onClick={() => setIsOpen(false)} />
        </div>
        <div className={styles.placeholder}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
          aliquid, perferendis enim molestias consectetur quam iusto laboriosam
          dignissimos nulla amet eos deserunt similique sit eum repudiandae.
          Ipsum ad praesentium alias?
        </div>
        <div className={styles.pianoHolder}>
          <Piano
            className={styles.piano}
            noteRange={{
              first: intervalStart,
              last: intervalEnd,
            }}
            playNote={(midiNumber) => {}}
            stopNote={(midiNumber) => {}}
            activeNotes={activeNotes}
          />
        </div>
      </div>
    </div>
  );
}
