import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jumbotron from './Jumbotron';
import Button from './Button';
import Album from './Album';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Container>
    <Jumbotron />
    {/* <Button name="John"/> */}
    <Album />
    </Container>
    
    
    
    
), document.getElementById('root'));
registerServiceWorker();
