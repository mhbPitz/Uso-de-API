import useDbzApi from "../hooks/useDbzApi";

export default function DragonBallApi() {
const {dbz, loading, error } = useDbzApi();

  if (!dbz || !dbz.image) {
    return <p>Carregando personagem do Dragon Ball...</p>;
  }

  return (
    <div className="hero">
      <img src={dbz.image} className="base" width="170" height="179" alt={dbz.name} />
    </div>
  );
}