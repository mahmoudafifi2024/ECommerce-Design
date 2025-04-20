import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface CartCheckoutProps {
  couponNameRes: string;
  totalCartPriceAfterDiscount: number;
  totalCartPrice: number;
}

const CartCheckout: React.FC<CartCheckoutProps> = ({ couponNameRes, totalCartPriceAfterDiscount, totalCartPrice }) => {
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex flex-column">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div className="cart-checkout-title">إجمالي السعر</div>
            <div className="d-flex">
              <div className="cart-checkout-price">{totalCartPrice}</div>
              <div className="cart-checkout-currency mx-1">جنيه</div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="cart-checkout-title">الخصم</div>
            <div className="d-flex">
              <div className="cart-checkout-price">- {couponNameRes}</div>
            </div>
          </div>
          <div className="d-flex justify-content-between border-top mt-3 pt-2">
            <div className="cart-checkout-title fw-bold">السعر بعد الخصم</div>
            <div className="d-flex">
              <div className="cart-checkout-price text-success fw-bold">{totalCartPriceAfterDiscount}</div>
              <div className="cart-checkout-currency mx-1">جنيه</div>
            </div>
          </div>
        </div>
        <Link 
          to="/order/paymethoud"
          className="btn btn-dark mt-3 px-3"
          style={{ borderRadius: '8px' }}
        >
          اتمام الشراء
        </Link>
      </Col>
    </Row>
  );
};

export default CartCheckout;