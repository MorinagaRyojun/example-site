import {Container, Row, Col, Button} from 'react-bootstrap'


import './stage.css'

function Stage2(props) {
    return (
        <>
        <Container className='stage2'>
            <Row className='me-3 mt-4 mb-3'>
                <Col className='leftImg' sm={6}>
                    <img className='Image' src={props.image} alt="dummy for testing" />
                </Col>
                <Col sm={6}>
                    <h1>{props.title}</h1>
                    <p className='description'>
                        {props.description}
                    </p>
                    {props.button != null &&
                        <Button variant="primary" size='lg'>{props.button}</Button>
                    }
                        
                </Col>
                
            </Row>
        
        </Container>
        </>
      
    
      
    );
  }
  
  export default Stage2;