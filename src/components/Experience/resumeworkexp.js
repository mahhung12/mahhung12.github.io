import React from "react";
import { Collapse } from "antd";

import { useTranslation } from "react-i18next";

import "./resumeworkexp.scss";

function Resumeworkexp() {
    const { t, i18n } = useTranslation();
    const { Panel } = Collapse;

    const callback = (key) => {
        // console.log(key);
    };

    return (
        <div className="workexp__wrap">
            <div className="title">{t("section-exp.title")}</div>

            <Collapse
                onChange={callback}
                className="workexp__wrap-container"
                accordion
            >
                <Panel
                    header={t("section-exp.exp1-title")}
                    key="1"
                    className="panel"
                >
                    <div className="panel-wrap">
                        <h3>
                            <b>{t("section-exp.exp1-date")}</b>
                        </h3>
                        <span>
                            <p>{t("section-exp.exp1-major")}</p>
                            <p>
                                <b>AVG: </b>3.1/4
                            </p>
                            <p>{t("section-exp.exp1-from")}</p>
                        </span>
                        <span>
                            <p>{t("section-exp.exp1-eng")}</p>
                        </span>
                    </div>
                </Panel>
                <Panel
                    header={t("section-exp.exp2-title")}
                    key="2"
                    className="panel"
                >
                    <Collapse defaultActiveKey="2" accordion>
                        <Panel header="AkaAT and JTC Project" key="2">
                            <div className="panel-wrap">
                                <h3>
                                    <b>{t("section-exp.exp2-date")}</b>
                                </h3>
                                <p>{t("section-exp.exp2-desc")}</p>
                                <span>
                                    <p>{t("section-exp.exp2-details")}</p>
                                    <p>{t("section-exp.exp2-tech")}</p>
                                </span>
                            </div>
                        </Panel>
                    </Collapse>
                    <Collapse>
                        <Panel header="Freelancer" key="2">
                            <div className="panel-wrap">
                                <h3>
                                    <b>{t("section-exp.exp3-date")}</b>
                                </h3>
                                <p>{t("section-exp.exp3-desc")}</p>
                                <a href="https://github.com/mahhung12">
                                    Preview Projects
                                </a>
                            </div>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel
                    header={t("section-exp.exp4-title")}
                    key="3"
                    className="panel"
                >
                    <div className="panel-wrap">
                        <h3>
                            <b>{t("section-exp.exp4-date")}</b>
                        </h3>
                        <p>{t("section-exp.exp4-desc")}</p>
                    </div>
                </Panel>
            </Collapse>
        </div>
    );
}

export default Resumeworkexp;
