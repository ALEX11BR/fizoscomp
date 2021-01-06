import React from 'react';
import { Row, Col } from 'antd';

import Graph from './Graph';

interface Props {
  osci: Osci,
  index: number
}

function Oscilatie(props: Props) {
  return (
    <Row>
      <Col xs={1}>
        <b>{props.index+1}.</b>
      </Col>
      <Col>
        <Graph color={props.osci.color} height={100} fn={(a) => 50*Math.sin(a/10+5)} />
      </Col>
      <Col>
        <Row><span>Amplitudine (A):</span></Row>
        <Row><span>Pulsație (ω):</span></Row>
        <Row><span>Faza inițială (φ<sub>0</sub>):</span></Row>
      </Col>
    </Row>
  );
}

export default Oscilatie;