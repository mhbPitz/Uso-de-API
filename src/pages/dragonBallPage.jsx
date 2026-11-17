import React, { useState } from "react";
import DragonBallApi from "../components/DragonBallApi.jsx";
import useDbzApi from "../hooks/useDbzApi.jsx";
import ThemeButton from "../hooks/ButtonTheme.jsx";

export default function DragonBallPage() {
  const [dark, setDark] = useState(false);
  const theme = dark ? 'theme-dark' : 'theme-light';
const { dbz, loading, error } = useDbzApi();

return (<>
<section id="center" className={theme}>
    <div className="div-filha-do-center">
        <ThemeButton dark={dark} onToggle={() => setDark(!dark)} />
      </div>
</section>
<DragonBallApi />
</>

)


}