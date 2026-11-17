import DragonBallApi from "../components/DragonBallApi.jsx";
import ThemeButton from "../hooks/ButtonTheme.jsx";

export default function DragonBallPage() {
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