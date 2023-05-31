
// import './register.css'
import {Container, Row, Col} from 'react-bootstrap';
import Register2 from '../components/Register2';

function RegisterPage() {
    return (
      <div className="RegisterPage">
        <Container className="mh-100">
          <Row>
            <Col md='3' />
            {/* <Col md='6'> */}
              <Register2 />
            {/* </Col> */}
            <Col md='3' />
          </Row>
        </Container>
      </div>
    );
  }
  
  export default RegisterPage;
