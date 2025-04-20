import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Coupon {
  _id: string;
  name: string;
  expire: string;
  discount: number;
}

interface AdminCoupnCardProps {
  coupon: Coupon;
}

const AdminCoupnCard: React.FC<AdminCoupnCardProps> = ({ coupon }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG');
  };

  return (
    <div className="user-address-card my-3 px-2">
      <Row className="d-flex justify-content-between">
        <Col xs="6">
          <div className="p-2">اسم الكوبون: {coupon.name}</div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div className="d-flex p-2">
            <Link to={`/admin/editcoupon/${coupon._id}`} style={{ textDecoration: 'none' }}>
              <div className="d-flex mx-2">
                <img
                  alt=""
                  className="ms-1 mt-2"
                  src="/images/edit.png"
                  height="17px"
                  width="15px"
                />
                <p className="item-delete-edit">تعديل</p>
              </div>
            </Link>
            <div className="d-flex">
              <img
                alt=""
                className="ms-1 mt-2"
                src="/images/delete.png"
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit">ازاله</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <div style={{ color: "#555550", fontSize: "16px" }}>
            تاريخ الانتهاء: {formatDate(coupon.expire)}
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div style={{ color: "#555550", fontSize: "16px" }}>
            نسبه الخصم:
          </div>
          <div style={{ color: "#979797", fontSize: "16px" }} className="mx-2">
            {coupon.discount} %
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminCoupnCard; 