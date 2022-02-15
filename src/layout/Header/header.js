import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ukFlag from "../../assets/images/UK-flag.png";
import vietnamFlag from "../../assets/images/vietnam-flag.png";
import "./header.scss";

function Header(props) {
    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(true);
    const [activeLanguage, setActiveLanguage] = useState(false);

    const onClickChangeLanguageVi = (language) => {
        i18n.changeLanguage(language);
        if (activeLanguage) {
            setActiveLanguage(!activeLanguage);
        }
    };

    const onClickChangeLanguageEn = (language) => {
        i18n.changeLanguage(language);
        if (!activeLanguage) {
            setActiveLanguage(!activeLanguage);
        }
    };

    useEffect(() => {
        var lastScrollTop = 0;
        const controlNavbar = () => {
            var st =
                window.pageYOffset || document.documentElement.scrollTop;

            setShow(st > lastScrollTop ? true : false);
            lastScrollTop = st <= 0 ? 0 : st;
        };
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);

    return (
        <div className={`wrapper active ${show && "hidden"}`}>
            <div className="layout__header">
                <div className="section__changeBg">
                    <div className="toggle-container">
                        <form>
                            <input
                                id="dark-mode"
                                className="toggle"
                                type="checkbox"
                                name="Dark mode"
                                role="switch"
                                value="on"
                                onClick={props.onClickChangeThemeMode}
                            />
                            <label
                                htmlFor="dark-mode"
                                className="sr"
                                onClick={props.onClickChangeThemeMode}
                            >
                                Dark Mode
                            </label>
                            <div className="curtain"></div>
                        </form>
                    </div>
                </div>

                <div className="section__changeLanguages">
                    <div
                        className={
                            activeLanguage
                                ? "language-button lan-active"
                                : "language-button"
                        }
                        onClick={() => onClickChangeLanguageVi("en")}
                    >
                        <img src={ukFlag} alt="" srcSet="" />
                    </div>
                    <div
                        className={
                            activeLanguage
                                ? "language-button"
                                : "language-button lan-active"
                        }
                        onClick={() => onClickChangeLanguageEn("vi")}
                    >
                        <img src={vietnamFlag} alt="AAA" srcSet="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
