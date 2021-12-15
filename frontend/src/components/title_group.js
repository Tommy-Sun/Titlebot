import React, { Component } from "react";
import { Segment, Container } from "semantic-ui-react";

const TitleGroup = (props) => {

    return (
        <Container>
            {props.data.map((dataPoint, index) => 
                {
                    const title = dataPoint.title;
    
                    return (
                        <Segment key={index}>
                            {title}    
                        </Segment>
                    )
                })
            }
        </Container>
    );
}


export default TitleGroup;

