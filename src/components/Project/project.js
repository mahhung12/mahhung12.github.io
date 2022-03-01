import React from "react";
import { useTranslation } from "react-i18next";

import NetflixLogo from "../../assets/images/netflix.jpg";
import ShopCart from "../../assets/images/shop-cart.png";
import GridSystem from "../../assets/images/Grid-System.png";

import "./project.scss";

function Project() {
    const { t, i18n } = useTranslation();
    return (
        <div className="project__wrap">
            <div className="title">{t("section-projects.title")}</div>
            <div className="section__projects">
                <div className="project">
                    <div className="project-img">
                        <img src={NetflixLogo} alt="none" srcSet="" />
                    </div>
                    <div className="project-date">
                        {t("section-projects.project1-date")}
                    </div>
                    <div className="project-title">
                        {t("section-projects.project1-title")}
                    </div>
                </div>
                <div className="project">
                    <div className="project-img">
                        <img src={ShopCart} alt="none" srcSet="" />
                    </div>
                    <div className="project-date">
                        {t("section-projects.project2-date")}
                    </div>
                    <div className="project-title">
                        {t("section-projects.project2-title")}
                    </div>
                </div>
                <div className="project">
                    <div className="project-img">
                        <img src={GridSystem} alt="none" srcSet="" />
                    </div>
                    <div className="project-date">
                        {t("section-projects.project3-date")}
                    </div>
                    <div className="project-title">
                        {t("section-projects.project3-title")}
                    </div>
                </div>
                <div className="project">
                    <div className="project-img">
                        <img src={NetflixLogo} alt="none" srcSet="" />
                    </div>
                    <div className="project-date">
                        {t("section-projects.project4-date")}
                    </div>
                    <div className="project-title">
                        {t("section-projects.project4-title")}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
