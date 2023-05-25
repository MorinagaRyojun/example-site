import './HomePage.css'
import {Container, Row, Col} from 'react-bootstrap'
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import Card from 'react-bootstrap/Card';
import ForTest from '../../components/ForTest';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s',
  }
});

const TestWord = ""

function HomePage() {
  return (
    <Container className='Container'>
      <Row>
        <Col className={css(styles.fadeIn)}>Home</Col>
          <h1 className={css(styles.fadeIn)}> Ryojun</h1>
        <Col>
          <Card className={css(styles.fadeIn)}>
            <Card.Body>
              <ForTest />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
  );
}

export default HomePage;
