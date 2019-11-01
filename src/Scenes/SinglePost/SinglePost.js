import React from 'react';
import MediaQuery from "react-responsive";
import { Layout, Col } from "antd";
import Post from '../Post/Post';

const {  Content } = Layout;


class SinglePost extends React.Component {

    render(){
        return(
            <Content>
              <Col span={6}><MediaQuery query= {"(min-width: 1224px)"}>Filter</MediaQuery></Col>
              <Col span={12}>
                <Post />
              </Col>
              <Col span={6}>Ask New Question</Col>
            </Content>
        );
    }

}

export default SinglePost;