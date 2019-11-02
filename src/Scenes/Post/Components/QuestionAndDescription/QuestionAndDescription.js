import React from 'react'
import { Row, Col } from 'antd';

class QuestionAndDescription extends React.Component{

    render(){
        return( <Row>
            <Col span={24}>
              <Row>
                <Col span={24}>
                  <span className="font-size-18 bold">
                    How can I help my unhappy coworker?
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <span>
                    I’ve gotten really close with a colleague who started at my
                    company about four months ago. She is really unhappy and is
                    thinking about leaving already. What can I do to help?
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>);
    }

}

export default QuestionAndDescription;