export default function TechRow({ label, value }) {
  if (value)
    return (
      <tr>
        <td>{label}</td>
        <td>{value}</td>
      </tr>
    );
  else {
    return <></>;
  }
}
