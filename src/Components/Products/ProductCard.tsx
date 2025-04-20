import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import rate from '../../images/rate.png';

interface ProductCardProps {
  product: {
    _id: string;
    title: string;
    imageCover: string;
    ratingsAverage: number;
    price: number;
    priceAfterDiscount?: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 4px rgba(0,0,0,0.07)",
        }}>
        <Link to={`/products/${product._id}`} style={{ textDecoration: "none" }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={product.imageCover} />
          <Card.Body>
            <Card.Title>
              <div className="card-title">
                {product.title.length > 50 
                  ? `${product.title.substring(0, 50)}...` 
                  : product.title}
              </div>
            </Card.Title>
            <Card.Text as="div">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <img
                    className="card-rate"
                    src={rate}
                    alt="rate"
                    height="16px"
                    width="16px"
                  />
                  <div className="card-rate">{product.ratingsAverage || 0}</div>
                </div>
                <div className="d-flex flex-column align-items-end">
                  {product.priceAfterDiscount && (
                    <div className="card-old-price">{product.price} جنيه</div>
                  )}
                  <div className="d-flex">
                    <div className="card-currency mx-1">جنيه</div>
                    <div className="card-price">
                      {product.priceAfterDiscount || product.price}
                    </div>
                  </div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default ProductCard; 