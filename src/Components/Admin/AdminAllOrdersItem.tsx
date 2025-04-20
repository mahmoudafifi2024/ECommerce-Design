import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Order {
  _id: string;
  user: {
    name: string;
    email: string;
    phone: string;
  };
  products: Array<{
    _id: string;
    title: string;
    quantity: number;
    price: number;
    image: string;
  }>;
  totalPrice: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}

interface AdminAllOrdersItemProps {
  order: Order;
}

const AdminAllOrdersItem: React.FC<AdminAllOrdersItemProps> = () => {
  const staticOrder = {
    orderId: "2321",
    productName: "آيفون XR بذاكرة سعة 128 جيجابايت",
    productImage: "/src/Images/mobile1.png",
    brand: "ابل",
    quantity: 1,
    price: 3000
  };

  return (
    <Col sm="12">
      <Link
        to={`/admin/orders/${staticOrder.orderId}`}
        className="cart-item-body my-2 px-1 d-flex"
        style={{ textDecoration: "none" }}>
        <img width="160px" height="197px" src={staticOrder.productImage} alt="" />
        <div className="w-100">
          <div className="d-flex justify-content-between">
            <div className="d-inline pt-2 cat-text">طلب رقم #{staticOrder.orderId}</div>
            <div className="d-inline pt-2 cat-text">ازاله</div>
          </div>
          <div className="mt-2">
            <div className="cat-title d-inline">{staticOrder.productName}</div>
            <div className="d-inline pt-2 cat-rate me-2">4.5</div>
          </div>
          <div className="mt-2">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">{staticOrder.brand}</div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text pt-1 d-inline">الكميه</div>
              <input
                className="mx-2 mt-1"
                type="number"
                style={{ width: "40px", height: "25px" }}
                value={staticOrder.quantity}
                readOnly
              />
            </div>
            <div className="d-inline pt-2 barnd-text">{staticOrder.price} جنية</div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default AdminAllOrdersItem; 