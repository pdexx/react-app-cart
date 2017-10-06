import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col,
} from 'reactstrap';

let randomPhoto = 'https://source.unsplash.com/1600x900/?car';


let data = [
    {price:1000, src:randomPhoto},
    {price:1000, src:randomPhoto},
    {price:1000, src:randomPhoto},
    {price:1000, src:randomPhoto},
    {price:1000, src:randomPhoto},
];

const Product = (props) => {
    // this.state={x:1};
    // this.addOne=()=>{setState({x:this.state.x +1});
    return (
        <div>
            {/* <h1>{this.state.x}</h1>
            <button onClick={this.addOne}>123</button> */}
            <Row>{
                data.map((photoLink)=>(
                    <Col sm="12" md="6" lg="4">
                    <Card className="mt-3">
                        <CardImg top width="100%" src={photoLink.src} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>價格:{photoLink.price}</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>購買</Button>
                        </CardBody>
                    </Card>
                </Col>
                ))
                
            }</Row>
            
        </div>
    );
};

export default Product;