import React from "react";
import { useTranslation } from "react-i18next";

import "./resumeworkexp.scss";

function Resumeworkexp() {
    const { t, i18n } = useTranslation();

    return (
        <div className="workexp__wrap">
            <div className="title">{t("section-exp.title")}</div>

            <div className="container">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img
                                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/study-2280013-1902258.png"
                                alt="/"
                            />
                            <h3>{t("section-exp.exp1-title")}</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>
                                <b>{t("section-exp.exp1-date")}</b>
                            </h3>
                            <span>
                                <p>{t("section-exp.exp1-from")}</p>
                                <p>{t("section-exp.exp1-major")}</p>
                            </span>

                            <p>
                                <b>AVG: </b>3.1/4
                            </p>
                            <a href="https://fap.fpt.edu.vn/Default.aspx">
                                {t("section-exp.button-more")}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img
                                src="https://saigonai.org/images/icons/intern.png"
                                alt="/"
                            />
                            <h3>{t("section-exp.exp2-title")}</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>
                                <b>{t("section-exp.exp2-date")}</b>
                            </h3>
                            <p>{t("section-exp.exp2-desc")}</p>
                            <a href="/">{t("section-exp.button-more")}</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/freelance-freelancer/149/freelance-freelancer-working-work-011-512.png"
                                alt="/"
                            />
                            <h3>{t("section-exp.exp3-title")}</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>
                                <b>{t("section-exp.exp3-date")}</b>
                            </h3>
                            <p>{t("section-exp.exp3-desc")}</p>
                            <a href="/">{t("section-exp.button-more")}</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img
                                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84560/preview.svg"
                                alt="/"
                            />
                            <h3>{t("section-exp.exp4-title")}</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>
                                <b>{t("section-exp.exp4-date")}</b>
                            </h3>
                            <p>{t("section-exp.exp4-desc")}</p>
                            <a href="/">{t("section-exp.button-more")}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resumeworkexp;
