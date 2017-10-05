import React from 'react';
import {
  Card, CardImg, CardText,
  CardTitle, CardImgOverlay, Row, Col, 
} from 'reactstrap';

const images = [
  { src: "https://i.imgur.com/8gNGXFE.jpg" },
  { src: "https://i.imgur.com/7erTesq.jpg" },
  { src: "https://i.imgur.com/QxIpgks.png" },
  { src: "https://i.imgur.com/AyyvV5y.jpg" },
  { src: "https://i.imgur.com/I3Qhy6L.jpg" },
  { src: "https://i.imgur.com/CT76Uau.jpg" },
  { src: "https://i.imgur.com/UXTTwvG.jpg" },
  { src: "https://i.imgur.com/Wtr6h9D.jpg" },
  { src: "https://i.imgur.com/b3qJ92n.jpg" },
  { src: "https://i.imgur.com/u432edU.jpg" },
  { src: "https://i.imgur.com/Yxm27ds.jpg" },
  { src: "https://i.imgur.com/cuUJa6m.jpg	"},
  { src: "https://i.imgur.com/Jz6wVGE.jpg	"},
  { src: "https://i.imgur.com/lcjWGEM.jpg	"},
  { src: "https://i.imgur.com/rvXl6V0.jpg	"},
  { src: "https://i.imgur.com/3eh5bea.jpg	"},
  { src: "https://i.imgur.com/8kw02WO.jpg	"},
  { src: "https://i.imgur.com/bqx3rl7.jpg	"}
];
const Album = (props) => {
  return (
    <div>
      <Row>{
        images.map(photoLink => (
          <Col sm="12" md="6" lg="6">
      
            <Card inverse className="mt-3">
              <CardImg width="100%" src={photoLink.src} alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          
          </Col>
        ))
      }</Row>
    </div>
  );
};

export default Album;