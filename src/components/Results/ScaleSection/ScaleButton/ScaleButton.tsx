import { useEffect, useState } from "react";
import PianoModal from "../../../PianoModal/PianoModal";
import styles from "./ScaleButton.module.css";

interface IProps {
  scale: Scale;
}

export default function ScaleButton({ scale }: IProps) {
  const [isPianoModalOpen, setIsPianoModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isPianoModalOpen ? "hidden" : "auto";
  }, [isPianoModalOpen]);

  return (
    <>
      <PianoModal
        isOpen={isPianoModalOpen}
        setIsOpen={setIsPianoModalOpen}
        scale={scale}
      />
      <button
        className={styles.scale}
        onClick={() => setIsPianoModalOpen(true)}
      >
        {scale.annotations.length > 1 ? (
          <span>
            {scale.annotations[0]}, {scale.annotations[2]}
          </span>
        ) : (
          <span>{scale.annotations[0]}</span>
        )}{" "}
        {scale.type.name}
      </button>
    </>
  );
}
