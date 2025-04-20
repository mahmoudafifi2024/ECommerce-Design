import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface CouponData {
  name: string;
  expireDate: string;
  discount: number;
}

const AdminEditCoupon: React.FC = () => {
  const staticCoupon: CouponData = {
    name: "SUMMER2024",
    expireDate: "2024-08-31",
    discount: 20
  };

  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">تعديل بيانات الكوبون</div>
        <Col sm="8">
          <input
            value={staticCoupon.name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الكوبون"
          />
          <input
            value={staticCoupon.expireDate}
            type="date"
            className="input-form d-block mt-3 px-3"
            placeholder="تاريخ الانتهاء"
          />
          <input
            value={staticCoupon.discount}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="نسبة خصم الكوبون"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button className="btn-save d-inline mt-2">حفظ التعديل</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminEditCoupon; 