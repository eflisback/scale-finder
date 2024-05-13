interface IProps {
  matchingScales: Scale[];
}

export default function Results({ matchingScales }: IProps) {
  return (
    <div>
      {matchingScales.map((scale) => (
        <div key={scale.annotation}>
          {scale.annotation} {scale.type.name}
        </div>
      ))}
    </div>
  );
}
