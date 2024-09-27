import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FinancialAdvice from '../components/FinancialAdvice';
import SignUpForm from '../components/SignUpForm';
import '../index.css';

const Signup = () => {
  return (
    <Container className="p-5 ">
      <Row className="bg-dark p-5 rounded  ">
        <Col>
          <FinancialAdvice />
        </Col>
        <Col>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
