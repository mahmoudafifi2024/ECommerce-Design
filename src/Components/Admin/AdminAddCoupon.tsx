import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface Coupon {
  name: string;
  expireDate: string;
  discount: number;
}

const AdminAddCoupon: React.FC = () => {
  const staticCoupon: Coupon = {
    name: '',
    expireDate: '',
    discount: 0
  };

  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">اضف كوبون جديد</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الكوبون"
          />
          <input
            type="date"
            className="input-form d-block mt-3 px-3"
            placeholder="تاريخ الانتهاء"
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="نسبة خصم الكوبون"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button className="btn-save d-inline mt-2">حفظ الكوبون</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddCoupon; 