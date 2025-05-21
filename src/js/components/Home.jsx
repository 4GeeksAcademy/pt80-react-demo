import { useEffect, useState } from "react";
import Container, { Col, Row } from "./Grid";
import WaterClock from "./WaterClock";

const Home = ({}) => {
  const [time, setTime] = useState(new Date());
  // const [value, setValue] = useState("Some state.");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  return (
    <Container>
      {/* <Row>
        <Col>
          <input
            type="text"
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
          />
        </Col>
      </Row> */}
      <Row>
        {/* Hours 10s place */}
        <Col offset={{ xl: 3 }} width={{ xl: 1 }}>
          <WaterClock
            fill={Math.floor(time.getHours() / 10) * 10}
            fillColor={`hsl(${0} 95% 50%)`}
          />
        </Col>
        {/* Hours 1s place */}
        <Col width={{ xl: 1 }}>
          <WaterClock
            fill={(time.getHours() % 10) * 10}
            fillColor={`hsl(${(360 / 6) * 1} 95% 50%)`}
          />
        </Col>
        {/* Minutes 10s place */}
        <Col width={{ xl: 1 }}>
          <WaterClock
            fill={Math.floor(time.getMinutes() / 10) * 10}
            fillColor={`hsl(${(360 / 6) * 2} 95% 50%)`}
          />
        </Col>
        {/* Minutes 1s place */}
        <Col width={{ xl: 1 }}>
          <WaterClock
            fill={(time.getMinutes() % 10) * 10}
            fillColor={`hsl(${(360 / 6) * 3} 95% 50%)`}
          />
        </Col>
        {/* Seconds 10s place */}
        <Col width={{ xl: 1 }}>
          <WaterClock
            fill={Math.floor(time.getSeconds() / 10) * 10}
            fillColor={`hsl(${(360 / 6) * 4} 95% 50%)`}
          />
        </Col>
        {/* Seconds 1s place */}
        <Col width={{ xl: 1 }}>
          <WaterClock
            fill={(time.getSeconds() % 10) * 10}
            fillColor={`hsl(${(360 / 6) * 5} 95% 50%)`}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
