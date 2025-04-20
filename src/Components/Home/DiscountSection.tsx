import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface DiscountSectionProps {
  title?: string;
  discount?: number;
  image?: string;
  backgroundColor?: string;
}

const DiscountSection: React.FC<DiscountSectionProps> = ({
  title = "خصم يصل حتى ٣٠٪ على أجهزة اللابتوب",
  image = "/src/Images/laptops.png",
  backgroundColor = "#F5F5F5"
}) => {
  return (
    <Container>
      <Row className="discount-backcolor my-3 mx-2 d-flex text-center align-items-center"
        style={{ backgroundColor, borderRadius: '8px' }}>
        <Col sm="6">
          <div className="discount-title">
            {title}
          </div>
        </Col>
        <Col sm="6">
          <img className="dicount-img" src={image} alt="discount" />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection; 