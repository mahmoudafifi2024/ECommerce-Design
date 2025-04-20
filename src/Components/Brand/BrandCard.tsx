import React from 'react';
import { Col, Card } from 'react-bootstrap';

interface BrandCardProps {
  img: string;
  name?: string;
}

const BrandCard: React.FC<BrandCardProps> = ({ img, name }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-2 d-flex justify-content-center">
      <Card
        className="my-1"
        style={{
          width: "100%",
          height: "151px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          cursor: "pointer",
          transition: "transform 0.2s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}>
        <Card.Img 
          style={{ width: "100%", height: "151px", objectFit: "contain" }} 
          src={img} 
          alt={name || "brand"} 
        />
        {name && (
          <Card.Body className="p-2">
            <Card.Title className="text-center m-0" style={{ fontSize: "14px" }}>
              {name}
            </Card.Title>
          </Card.Body>
        )}
      </Card>
    </Col>
  );
};

export default BrandCard; 