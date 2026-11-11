import usePokemonApi from '../hooks/usePokemonApi';
export default function PokemonApi2() {
const {pokemon, loading, error, roletarPokemon} = usePokemonApi();
  if (!pokemon || !pokemon.sprites) {
    return <p>Carregando Pokémon...</p>;
  }

  return (
    <div id="social" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>
      <h2>Meu pet</h2>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>{pokemon.types && pokemon.types[0].type.name}</p>
      <button type="button" onClick={roletarPokemon} style={{ width: 'fit-content', height: 'fit-content', margin: '0 auto'}}>
        Roletar Pokémon
      </button>
    </div>
  );
}