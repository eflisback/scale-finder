import styles from "./PianoModal.module.css";
import { RxCross2 } from "react-icons/rx";
import { Piano, MidiNumbers } from "react-piano";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scale: Scale;
}

export default function PianoModal({ isOpen, setIsOpen, scale }: IProps) {
  if (!isOpen) return;

  return (
    <div className={styles.background} onClick={() => setIsOpen(false)}>
      <div
        className={styles.modal}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
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
        <Piano
          noteRange={{
            first: MidiNumbers.fromNote("c3"),
            last: MidiNumbers.fromNote("f5"),
          }}
          playNote={(midiNumber: number) => {
            // Play a given note - see notes below
          }}
          stopNote={(midiNumber: number) => {
            // Stop playing a given note - see notes below
          }}
          width={"100%"}
        />
      </div>
    </div>
  );
}
