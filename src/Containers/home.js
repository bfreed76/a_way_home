import React from "react";
import { Row, Col, Button } from 'react-bootstrap'

const home = () => {
  return (
    <div>
      <header className='App-header'>
        <p>Testing</p>

        <Row className='mx-0'>
          <Button as={Col} variant='primary'>
            Button #1
          </Button>
          <Button as={Col} variant='secondary' className='mx-2'>
            Button #2
          </Button>
          <Button as={Col} variant='success'>
            Button #3
          </Button>
        </Row>
      </header>
    </div>
  );
};

export default home;