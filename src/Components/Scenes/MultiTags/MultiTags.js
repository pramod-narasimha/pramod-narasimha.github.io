import React from 'react'
import './MultiTags.less';

class MultiTags extends React.Component {

    render(){
        return(<div>
            <span className="posted-in pr1">Posted in</span>
            <span className="mr1 product-ux">#Product/UX</span>
            <span className="mr1 product-ux">#TopicName2</span>
            <span className="mr1 product-ux">#TopicName3</span>
            <span className="mr1 product-ux">#TopicName4</span>
            <span className="mr1 product-ux">#TopicName5</span>
        </div>);
    }
}

export default MultiTags;