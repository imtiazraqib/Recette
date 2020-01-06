import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


const Recipe = ({title, calories, cookingTime, recipeLink, image}) => {
    return (
        
        <Col xs="12" sm="6" md="4" lg="2" className="padding">
            <Card>
                <CardImg top width="100%" src={image} />
                <CardBody className="RecipeCard">
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle className="text-muted">{calories} cal | {cookingTime} min</CardSubtitle>
                    <br />
                    <a href={recipeLink} target="_blank">
                        <Button color="info">See Recipe</Button>
                    </a>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Recipe;