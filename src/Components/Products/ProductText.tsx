import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

interface ProductImage {
  id: string;
  url: string;
}

interface ProductDetails {
  id: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  priceAfterDiscount?: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  colors: string[];
  images: ProductImage[];
  specifications: Record<string, string>;
}

interface ProductTextProps {
  product: ProductDetails;
}

const ProductText: React.FC<ProductTextProps> = ({ product }) => {
  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">{product.category} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {product.title}
            <div className="cat-rate d-inline mx-3">{product.ratingsAverage}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{product.brand}</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="color ms-2"
              style={{ backgroundColor: color, width: '30px', height: '30px', borderRadius: '50%' }}
            ></div>
          ))}
        </Col>
      </Row>
      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <ul>
            {Object.entries(product.specifications).map(([key, value], index) => (
              <li key={index}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            {product.priceAfterDiscount ? (
              <>
                <span style={{ textDecoration: 'line-through', color: 'red', marginRight: '10px' }}>
                  {product.price} جنية
                </span>
                <span>{product.priceAfterDiscount} جنية</span>
              </>
            ) : (
              `${product.price} جنية`
            )}
          </div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ProductText;
