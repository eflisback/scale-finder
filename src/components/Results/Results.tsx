interface IProps {
  matchingScales: Scale[];
}

export default function Results({ matchingScales }: IProps) {
  return (
    <div>
      {matchingScales.map((scale, index) => (
        <div key={index}>
          {scale.annotation} {scale.type.name} {scale.type.sequence}
        </div>
      ))}
    </div>
  );
}
