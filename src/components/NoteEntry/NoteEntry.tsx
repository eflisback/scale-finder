interface IProps {
  setNotes: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function NoteEntry({ setNotes }: IProps) {
  return <div>NoteEntry</div>;
}
