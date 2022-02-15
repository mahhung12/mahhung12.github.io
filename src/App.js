import { withTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import "./App.scss";
import { About, Experience, Project, Skills } from "./components/index";
import { Footer, Header } from "./layout/index";

function App() {
    const defaultDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const [theme, setTheme] = useLocalStorage(
        "theme",
        defaultDark ? "dark" : "light"
    );

    const onClickChangeThemeMode = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <div className="App" data-theme={theme}>
            <Header onClickChangeThemeMode={onClickChangeThemeMode} />
            <div className="section-main">
                <About />
                <Project />
                <Skills />
                <Experience />
            </div>
            <Footer />
        </div>
    );
}

export default withTranslation()(App);
