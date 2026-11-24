import React, { useState, useEffect } from "react";
import DragonBallApi from "../components/DragonBallApi.jsx";
import useDbzApi from "../hooks/useDbzApi.jsx";
import ThemeButton from "../hooks/ButtonTheme.jsx";
import MainPageRender from '../components/MainPageRender.jsx'

export default function DragonBallPage() {
  const [dark, setDark] = useState(false);
  const theme = dark ? 'theme-dark' : 'theme-light';
const { dbz, loading, error } = useDbzApi();

useEffect(() => {
localStorage.setItem('dark', dark);
},[dark])

return (<>
<section id="center" className={theme}>
    <div className="div-filha-do-center">
        <ThemeButton dark={dark} onToggle={() => setDark(!dark)} />
      </div>
</section>
<DragonBallApi />
<MainPageRender />
</>

)


}