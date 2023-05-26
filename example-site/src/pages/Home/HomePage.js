import './HomePage.css'
import {Row, Col} from 'react-bootstrap'
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import Stage1 from '../../components/Content/stage1';
import Stage2 from '../../components/Content/stage2';


import Img1 from './image1.png'

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s',
  },
  background: {
    backgroundColor: "white"
  }
});

const dataContent = {
  Title1 : "ยินดีต้อนรับ",
  Description1 : `ให้ AI จากเรา ช่วยตอบแชทสิ \n ช่วยขาย ช่วยจัดการ ตอบโจทย์ธุรกิจ`,
  Button1 : "Click! เลย",
  Image1 : Img1
}
function HomePage() {
  return (
    <div className='Container'>
      <Row>
        <Col className={css(styles.fadeIn)}>
          <Stage1 className={css(styles.fadeIn)} title={dataContent.Title1}  description={dataContent.Description1} button={dataContent.Button1} image={dataContent.Image1}/>
        </Col>
      </Row>
      <Row className={css(styles.background)}>
        <Col className={css(styles.fadeIn)}>
          <Stage2 className={css(styles.fadeIn)} title={dataContent.Title1}  description={dataContent.Description1}  image={dataContent.Image1}/>
        </Col>
      </Row>
      <Row className={css(styles.background)}>
        <Stage2 className={css(styles.fadeIn)} title={dataContent.Title1}  description={dataContent.Description1}  image={dataContent.Image1}/>
      </Row>

    </div>
    
  );
}

export default HomePage;
