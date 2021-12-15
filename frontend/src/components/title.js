import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

const Title = (props) => {
    const {index, title} = props
    
    return (
        <Segment key={index}>
            {title}    
        </Segment>);
}


export default Title;