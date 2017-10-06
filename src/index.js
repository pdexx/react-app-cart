import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JumbotronModal from './JumbotronModal';
import Button from './Button';
import Album from './Album';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Container>
    <JumbotronModal />
    {/* <Button name="John"/> */}
    <Card />
    {/* <Album /> */}
    </Container>
    
    
    
    
), document.getElementById('root'));
registerServiceWorker();
