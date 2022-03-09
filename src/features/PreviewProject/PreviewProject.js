import {
    PageHeader,
    Menu,
    Dropdown,
    Button,
    Tag,
    Typography,
    Row,
} from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

import selfImg from "../../assets/images/self-img01.JPG";

const { Paragraph } = Typography;

const menu = (
    <Menu>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.alipay.com/"
            >
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.taobao.com/"
            >
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.tmall.com/"
            >
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

const DropdownMenu = () => (
    <Dropdown key="more" overlay={menu}>
        <Button
            style={{
                border: "none",
                padding: 0,
            }}
        >
            <EllipsisOutlined
                style={{
                    fontSize: 20,
                    verticalAlign: "top",
                }}
            />
        </Button>
    </Dropdown>
);

const routes = [
    {
        path: "second",
        breadcrumbName: "Third-level Menu",
    },
];

const IconLink = ({ src, text }) => (
    <a className="example-link">
        <img className="example-link-icon" src={src} alt={text} />
        {text}
    </a>
);

const content = (
    <>
        <Paragraph>
            Ant Design interprets the color system into two levels: a
            system-level color system and a product-level color system.
        </Paragraph>
        <Paragraph>
            Ant Design&#x27;s design team preferred to design with the HSB
            color model, which makes it easier for designers to have a
            clear psychological expectation of color when adjusting colors,
            as well as facilitate communication in teams.
        </Paragraph>
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
                text="Preview"
                style={{
                    textAlign: "center",
                    border: "10px solid red",
                }}
            />
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
                text="Source Code"
            />
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
                text="Product Doc"
            />
        </div>
    </>
);

const Content = ({ children, extraContent }) => (
    <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
    </Row>
);

const Wrapper = (props) => {
    const { title, date, img } = props;
    return (
        <PageHeader
            // title={title}
            className="site-page-header"
            subTitle="Create At"
            tags={<Tag color="blue">{date}</Tag>}
            avatar={selfImg}
            // avatar={{
            //     src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
            // }}
            // breadcrumb={{ routes }}
        >
            <Content
                extraContent={
                    <img
                        // src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                        src={img}
                        alt={title}
                        width="100%"
                    />
                }
            >
                {content}
            </Content>
        </PageHeader>
    );
};

export default Wrapper;
