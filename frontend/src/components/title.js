import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

const Title = (props) => {

    return (<Segment>{props.title} Testing React Code {props.url}</Segment>);
}


export default Title;