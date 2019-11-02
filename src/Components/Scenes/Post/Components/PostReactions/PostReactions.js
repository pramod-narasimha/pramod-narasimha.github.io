import React from 'react'
import { Row, Col, Tag, Icon } from 'antd';
import LikeCount from '../../../../../assets/SVGs/LikeCount';
import HeartCount from '../../../../../assets/SVGs/HeartCount';
import ClapCount from '../../../../../assets/SVGs/ClapCount';

class PostReactions extends React.Component {

    render(){
        return (<Row>
            <Col span={8}>
              <Tag color="blue">#Product/UX</Tag>
            </Col>
            <Col span={8} offset={8}>
              <Col span={6}>
                <Icon component={LikeCount} />
              </Col>
              <Col span={6}>
                <Icon component={HeartCount} />
              </Col>
              <Col span={6}>
                <Icon component={ClapCount} />
              </Col>
              <Col span={6}>
                <span>
                  <span>2</span>
                  <span>answers</span>
                </span>
              </Col>
            </Col>
          </Row>
);
    }
}

export default PostReactions;