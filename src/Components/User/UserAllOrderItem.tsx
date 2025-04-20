import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface OrderProduct {
  id: string;
  title: string;
  quantity: number;
  price: number;
  image: string;
}

interface OrderDetails {
  id: string;
  status: string;
  date: string;
  totalPrice: number;
  products: OrderProduct[];
}

interface UserAllOrderItemProps {
  order: OrderDetails;
}

const UserAllOrderItem: React.FC<UserAllOrderItemProps> = ({ order }) => {
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'pending':
        return '#ffc107';
      case 'processing':
        return '#17a2b8';
      case 'delivered':
        return '#28a745';
      case 'cancelled':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case 'pending':
        return 'قيد الانتظار';
      case 'processing':
        return 'قيد التنفيذ';
      case 'delivered':
        return 'تم التوصيل';
      case 'cancelled':
        return 'تم الإلغاء';
      default:
        return 'غير معروف';
    }
  };

  return (
    <div className="user-order-item my-2">
      <Row className="d-flex justify-content-between">
        <Col xs="3" className="d-flex align-items-center">
          <div className="d-inline p-2 order-id">طلب رقم #{order.id}</div>
        </Col>
        <Col xs="3" className="d-flex align-items-center">
          <div className="d-inline p-2">
            <span 
              className="status-badge"
              style={{ 
                backgroundColor: `${getStatusColor(order.status)}20`,
                color: getStatusColor(order.status),
                padding: '4px 8px',
                borderRadius: '4px'
              }}>
              {getStatusText(order.status)}
            </span>
          </div>
        </Col>
        <Col xs="3" className="d-flex align-items-center">
          <div className="d-inline p-2">{new Date(order.date).toLocaleDateString('ar-EG')}</div>
        </Col>
        <Col xs="3" className="d-flex align-items-center justify-content-end">
          <div className="d-inline">
            <Link to={`/user/orders/${order.id}`} className="btn btn-dark">
              التفاصيل
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs="12">
          <div className="order-products">
            {order.products.map(product => (
              <div key={product.id} className="d-inline-block mx-2">
                <img 
                  src={product.image} 
                  alt={product.title}
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }} 
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs="12" className="d-flex justify-content-end">
          <div className="order-total">
            الإجمالي: {order.totalPrice} جنيه
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderItem; 