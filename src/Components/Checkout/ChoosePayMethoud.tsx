import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface PaymentMethod {
  id: string;
  name: string;
  value: string;
}

interface OrderSummary {
  totalPrice: number;
  currency: string;
}

const ChoosePayMethoud: React.FC = () => {
  const paymentMethods: PaymentMethod[] = [
    {
      id: 'credit',
      name: 'الدفع عن طريق البطاقه الائتمانية',
      value: 'credit'
    },
    {
      id: 'cash',
      name: 'الدفع عند الاستلام',
      value: 'cash'
    }
  ];

  const orderSummary: OrderSummary = {
    totalPrice: 34000,
    currency: 'جنية'
  };

  return (
    <div>
      <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
      <div className="user-address-card my-3 px-3">
        {paymentMethods.map((method) => (
          <Row key={method.id} className="d-flex justify-content-between">
            <Col xs="12" className="my-4">
              <input
                name="paymentMethod"
                id={method.id}
                type="radio"
                value={method.value}
                className="mt-2"
              />
              <label className="mx-2" htmlFor={method.id}>
                {method.name}
              </label>
            </Col>
          </Row>
        ))}
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline border">
            {orderSummary.totalPrice} {orderSummary.currency}
          </div>
          <div className="product-cart-add px-3 pt-2 d-inline me-2">
            اتمام الشراء
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChoosePayMethoud; 