import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jumbotron from './Jumbotron';
import Button from './Button';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Container>
    <Jumbotron />
    {/* <Button name="John"/> */}
    <br/>
    <Card />
    </Container>
    
    
    
    
), document.getElementById('root'));
registerServiceWorker();
