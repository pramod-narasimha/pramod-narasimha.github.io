import React from "react";
import { Layout, Row, Col, Avatar, Input, Icon } from "antd";
import MediaQuery from "react-responsive";
import "./HeaderBar.less";
import userProfile from "../../assets/images/user_profile.png";
import Post from "../../Scenes/Post/Post";
import HushLogo from "../../assets/SVGs/HushLogo";

const { Header, Footer, Sider, Content } = Layout;

class HeaderBar extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <Row>
              <Col span={6}>
                <div className="companyImage">
                    <Icon component={HushLogo}/>
                </div>
              </Col>
              <Col span={12}>
                <Input
                  placeholder="Search Hush"
                  prefix={<Icon type="search" />}
                />
              </Col>
              <Col span={6}>
                <div className="profileImage">
                  <Avatar src={userProfile} />
                </div>
              </Col>
            </Row>
          </Header>
          <Layout>
            <Content>
              <Col span={4}><MediaQuery query= {"(min-width: 1224px)"}>Filter</MediaQuery></Col>
              <Col span={16}>
                <Post />
              </Col>
              <Col span={4}>Ask New Question</Col>
            </Content>
          </Layout>
          <Footer></Footer>
        </Layout>
      </div>
    );
  }
}

export default HeaderBar;
