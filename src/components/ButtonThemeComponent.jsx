import React, {useState, useEffect} from 'react'
import ThemeButton from '../hooks/ButtonTheme'

export default function ButtonThemeComponent () {
 const [dark, setDark] = useState(false);
  const theme = dark ? 'theme-dark' : 'theme-light';

    return (<>
    <section id="center" className={theme}>
                <div className="div-filha-do-center">
                    <ThemeButton dark={dark} onToggle={() => setDark(!dark)} />
                  </div>
                  </section>
    </>
    )
}