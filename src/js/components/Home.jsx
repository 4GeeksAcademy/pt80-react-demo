import Container, { Col, Row } from "./Grid";
import WaterClock from "./WaterClock";

const Home = ({ time }) => {
  return (
    <Container>
      <Row>
        {/* Hours 10s place */}
        <Col offset={{ xl: 3 }} width={{ xl: 1 }}>
          <WaterClock fill={Math.floor(time.getHours() / 10) * 10} />
        </Col>
        {/* Hours 1s place */}
        <Col width={{ xl: 1 }}>
          <WaterClock fill={(time.getHours() % 10) * 10} />
        </Col>
        {/* Minutes 10s place */}
        <Col width={{ xl: 1 }}>
          <WaterClock fill={(Math.floor(time.getMinutes()) / 10) * 10} />
        </Col>
        {/* Minutes 1s place */}
        <Col width={{ xl: 1 }}>
          <WaterClock fill={(time.getMinutes() % 10) * 10} />
        </Col>
        {/* Seconds 10s place */}
        <Col width={{ xl: 1 }}>
          <WaterClock fill={(Math.floor(time.getSeconds()) / 10) * 10} />
        </Col>
        {/* Seconds 1s place */}
        <Col width={{ xl: 1 }}>
          <WaterClock fill={(time.getSeconds() % 10) * 10} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
