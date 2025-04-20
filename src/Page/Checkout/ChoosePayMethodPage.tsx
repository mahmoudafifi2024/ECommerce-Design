import React from 'react';
import { Container } from 'react-bootstrap';
import ChoosePayMethod from '../../Components/Checkout/ChoosePayMethoud';

const ChoosePayMethodPage: React.FC = () => {
  return (
    <Container style={{ minHeight: '670px' }}>
      <ChoosePayMethod />
    </Container>
  );
};

export default ChoosePayMethodPage; 