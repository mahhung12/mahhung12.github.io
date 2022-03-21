import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "../../i18next";
import "./about.scss";

import selfImg from "../../assets/images/self-img01.JPG";

function About() {
    const { t, i18n } = useTranslation();

    const onClickTab = () => {
        // alert(123);
    };
    return (
        <>
            <div className="aboutme-wrap">
                <div className="title">{ t("sectionAbout.title") }</div>
                <div className="section__about">
                    <div className="section__about-introduction"
                    >
                        <div className="nameself"> Mạnh Hùng </div>
                        <div className="position"> Front-end Developer </div>
                        <div className="main-img">
                            <img src={ selfImg } alt="None" srcSet="" />
                        </div>
                    </div>
                    <div className="section__about-summary">
                        <div className="custombox">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                width="1em"
                                height="1em"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 64 64"
                                className="iconify"
                                data-icon="emojione:red-circle"
                                data-inline="false"
                                style={ { transform: `rotate(360deg)` } }
                                onClick={ () => onClickTab() }
                            >
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="30"
                                    fill="#ed4c5c"
                                ></circle>
                            </svg>{ " " }
                            &nbsp;{ " " }
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                width="1em"
                                height="1em"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 36 36"
                                className="iconify"
                                data-icon="twemoji:yellow-circle"
                                data-inline="false"
                                style={ { transform: `rotate(360deg)` } }
                                onClick={ () => onClickTab() }
                            >
                                <circle
                                    fill="#FDCB58"
                                    cx="18"
                                    cy="18"
                                    r="18"
                                ></circle>
                            </svg>{ " " }
                            &nbsp;{ " " }
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                width="1em"
                                height="1em"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 36 36"
                                className="iconify"
                                data-icon="twemoji:green-circle"
                                data-inline="false"
                                style={ { transform: `rotate(360deg)` } }
                                onClick={ () => onClickTab() }
                            >
                                <circle
                                    fill="#78B159"
                                    cx="18"
                                    cy="18"
                                    r="18"
                                ></circle>
                            </svg>
                            &nbsp;
                        </div>
                        <div className="summary-area">
                            <p>{ t("sectionAbout.desc1") }</p>
                            <p>{ t("sectionAbout.desc2") }</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
