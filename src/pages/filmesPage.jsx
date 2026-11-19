import MovieEe from "../components/listMovie.jsx";
import ThemeButton from "../hooks/ButtonTheme.jsx";
import React, {useState, useEffect} from "react";
import MainPageRender from '../components/MainPageRender.jsx'

export default function MoviesPage() {
const [dark, setDark] = useState(false)
const theme = dark ? 'theme-dark' : 'theme-light';

    return (
        <>
        <MovieEe />
        <MainPageRender />
        <section id="center" className={theme}>
            <div className="div-filha-do-center">
                <ThemeButton dark={dark} onToggle={() => setDark(!dark)} />
              </div>
              </section>
        </>
    )
}