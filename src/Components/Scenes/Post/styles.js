import styled from "styled-components";
import { Card } from "antd";

export const PostCard = styled(Card)`
&&&{
    width: 564px;
}
@media (max-width: 564px) {
    &&&{
        width: auto;
    }
  }
&>.ant-card-body{
    padding: 16px;
}
`