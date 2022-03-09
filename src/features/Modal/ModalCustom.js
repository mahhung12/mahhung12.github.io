import React, { useState } from "react";
import { Modal, Button } from "antd";

const ModalCustom = (props) => {
    console.log("Modal Open");

    const { projectName, isModalVisible } = props;
    console.log(isModalVisible);
    // const [isModalVisible, setIsModalVisible] = useState(false);

    // const showModal = () => {
    //     setIsModalVisible(true);
    // };

    // const handleOk = () => {
    //     setIsModalVisible(false);
    // };

    // const handleCancel = () => {
    //     setIsModalVisible(false);
    // };

    return (
        <>
            {/* <Button type="primary">
                Open Modal
            </Button> */}
            <Modal
                title={`Project ${projectName}`}
                visible={isModalVisible}
                // onOk={handleOk}
                // onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default ModalCustom;
