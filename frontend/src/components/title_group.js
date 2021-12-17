import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Title from "./title";

class TitleGroup extends Component {
    constructor(props) {
        super(props);

    }

    onFavClick = () => {
        console.log("calling on FavClick");
        this.props.onGetNewData();
    }

    render() {
        return (
            <Container>
                {this.props.data.slice(0).reverse().map((dataPoint, index) => 
                    {
                        const title = dataPoint.title;
                        const url = dataPoint.url;
                        const id = dataPoint.id;
                        const favIcon = dataPoint.favIcon;
                        const favorited = dataPoint.favorited;
        
                        return (
                            <Title 
                                onFavClick={this.onFavClick}
                                key = {index}
                                title={title}
                                url = {url}
                                id = {id}
                                favIcon = {favIcon}
                                favorited = {favorited}
                            />
                        )
                    })
                }
            </Container>
        );
    }
}

export default TitleGroup;