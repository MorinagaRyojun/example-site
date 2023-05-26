import {Container, Row, Col, Button} from 'react-bootstrap'


import './stage.css'

function Stage1(props) {
    return (
        <>
        <Container>
        <Row className='mt-4 mb-3'>
            <Col sm={8}>
                <h1>{props.title}</h1>
                <p className='description'>
                    {props.description}
                </p>
                {props.button != null &&
                    <Button variant="primary" size='lg'>{props.button}</Button>
                }
                    
            </Col>
            <Col sm={4}>
                <img className='Image' src={props.image} alt="dummy for testing"/>
            </Col>
        </Row>
        
        </Container>
        </>
      
    
      
    );
  }
  
  export default Stage1;