import { useEffect, useState } from 'react';
import './App.css';
import './Tema claro.css';
import './Tema escuro.css';
import ThemeButton from './hooks/ButtonTheme.jsx';
import MovieEe from './components/listMovie.jsx';
import PokemonApi from './components/PokemonApi.jsx';
import DragonBallApi from './components/DragonBallApi.jsx';
import MockApi from './components/MockApi.jsx';
import useDbzApi from './hooks/useDbzApi.jsx';
import useMockApi from './hooks/useMockApi.jsx';
import useOmdbApi from './hooks/useOmdbApi.jsx';
import usePokemonApi from './hooks/usePokemonApi.jsx';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import DragonBallPage from './pages/dragonBallPage.jsx';
import MoviesPage from './pages/filmesPage.jsx';
import PokemonPage from './pages/pokemonPage.jsx';
import MainPage from './pages/MainPage.jsx'



function App() {
  const [dark, setDark] = useState(false);
  const [text, setText] = useState(() => localStorage.getItem('easy-input') || '');

  const { perfil, error: perfilError } = useMockApi();
  const { dbz, error: dbzError } = useDbzApi();
  const { pokemon, error: pokemonError } = usePokemonApi();
  const { filme, error: filmeError } = useOmdbApi();

  const theme = dark ? 'theme-dark' : 'theme-light';

  useEffect(() => {
    localStorage.setItem('easy-input', text);
    console.log('Fácil: Salvando no localStorage ->', text);
  }, [text]);

  return (
    <>
    <BrowserRouter>
    <section id="center" className={theme}>
<Routes>
  <Route path='/' element={<MainPage />} />
  <Route path='/dbz' element={<DragonBallPage />} />
  <Route path='/movies' element={<MoviesPage />} />
  <Route path='/pokemon' element ={<PokemonPage />} />
  
</Routes>
      
{/*    {(perfilError || dbzError || pokemonError || filmeError) && (
        <p role="alert">Não foi possível carregar alguns dados. Verifique sua conexão e tente novamente.</p>
        )} */}


      {/* <div className="card">
        <h2>UseEffect Nível Fácil: Sincronizar com LocalStorage</h2>
        <p>O que você digitar será salvo automaticamente. Se recarregar a página, não perderá a informação.</p>
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite algo para salvar..."
        />
        </div> */}



      <div className="ticks" />

      {/* <section id="next-steps">
        <div id="docs">
        <h2>Filme que não gostei</h2>
        <p>{filme?.Title}</p>
        {filme?.Poster && <img src={filme.Poster} width="170" alt={filme.Title} />}
        {filme?.Ratings && filme.Ratings[1] && (
          <>
          <p>{filme.Ratings[1].Source}</p>
          <p>{filme.Ratings[1].Value}</p>
          </>
          )}
          </div> 
          </section>*/}

      <div className="ticks" />
    </section>
          </BrowserRouter>
            </>
  );
}

export default App;