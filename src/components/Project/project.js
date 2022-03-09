import React, { useState, createRef } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "antd";

import NetflixLogo from "../../assets/images/netflix.jpg";
import ShopCart from "../../assets/images/shop-cart.png";
import GridSystem from "../../assets/images/Grid-System.png";
import Dictionary from "../../assets/images/Dictionary.png";

import "./project.scss";
import Wrapper from "../../features/PreviewProject/PreviewProject";

function Project() {
    const { t, i18n } = useTranslation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [projectName, setProjectName] = useState();
    const [projectNumber, setProjectNumber] = useState();
    const [projectDate, setProjectDate] = useState();
    const [projectImg, setProjectImg] = useState();

    const wrapper = React.createRef();
    const nodeRef = React.useRef(null);

    const projectData = [
        {
            img: NetflixLogo,
            date: `${t(`section-projects.project1-date`)}`,
            title: `${t(`section-projects.project1-title`)}`,
        },
        {
            img: ShopCart,
            date: `${t(`section-projects.project2-date`)}`,
            title: `${t(`section-projects.project2-title`)}`,
        },
        {
            img: GridSystem,
            date: `${t(`section-projects.project3-date`)}`,
            title: `${t(`section-projects.project3-title`)}`,
        },
        {
            img: Dictionary,
            date: `${t(`section-projects.project4-date`)}`,
            title: `${t(`section-projects.project4-title`)}`,
        },
    ];

    const ModalProject = () => {
        return (
            <Modal
                type="primary"
                title={projectName}
                visible={isModalVisible}
                noderef={nodeRef}
                onCancel={() => {
                    setIsModalVisible(false);
                }}
                onOk={() => {
                    setIsModalVisible(false);
                }}
                // width={100}
                footer={null}
            >
                <Wrapper
                    title={projectName}
                    date={projectDate}
                    img={projectImg}
                />
            </Modal>
        );
    };

    const onOpenProjectDetails = (props) => {
        const { number, title, date, img } = props;
        setIsModalVisible(true);
        setProjectName(title);
        setProjectNumber(number);
        setProjectDate(date);
        setProjectImg(img);
    };

    return (
        <>
            <div className="project__wrap">
                <div className="title">{t("section-projects.title")}</div>
                <div className="section__projects" noderef={nodeRef}>
                    {projectData.map((data, index) => {
                        return (
                            <div
                                className="project"
                                key={index}
                                onClick={() =>
                                    onOpenProjectDetails({
                                        number: index + 1,
                                        title: data.title,
                                        date: data.date,
                                        img: data.img,
                                    })
                                }
                                // ref={useRef}
                                ref={nodeRef}
                            >
                                <div className="project-img">
                                    <img
                                        src={data.img}
                                        alt={data.title}
                                        srcSet=""
                                    />
                                </div>
                                <div className="project-date">
                                    {data.date}
                                </div>
                                <div className="project-title">
                                    {data.title}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <ModalProject />
        </>
    );
}

export default Project;
