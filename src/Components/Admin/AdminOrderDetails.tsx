import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface OrderProduct {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface OrderDetails {
  orderId: string;
  orderDate: string;
  status: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  products: OrderProduct[];
  totalPrice: number;
}

const AdminOrderDetails: React.FC = () => {
  const [orderDetails, setOrderDetails] = React.useState<OrderDetails>({
    orderId: "ORD123456",
    orderDate: "2024-03-20",
    status: "pending",
    customer: {
      name: "أحمد محمد",
      email: "ahmed@example.com",
      phone: "0123456789",
      address: "القاهرة، مصر"
    },
    products: [
      {
        id: "1",
        name: "ايفون 14 برو ماكس",
        quantity: 1,
        price: 45000,
        image: "/images/iphone.png"
      },
      {
        id: "2",
        name: "سماعات ايربودز برو",
        quantity: 2,
        price: 4500,
        image: "/images/airpods.png"
      }
    ],
    totalPrice: 54000
  });

  const statusOptions = [
    { value: 'pending', label: 'قيد المعالجة' },
    { value: 'processing', label: 'جاري التجهيز' },
    { value: 'shipped', label: 'تم الشحن' },
    { value: 'delivered', label: 'تم التوصيل' },
    { value: 'cancelled', label: 'ملغي' }
  ];

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderDetails({ ...orderDetails, status: e.target.value });
  };

  return (
    <div className="admin-order-details">
      <div className="admin-content-text">تفاصيل الطلب رقم #{orderDetails.orderId}</div>
      
      <Row className="mt-4">
        <Col md="6">
          <div className="order-details-card p-3">
            <h5 className="mb-3">معلومات العميل</h5>
            <div className="customer-info">
              <p><strong>الاسم:</strong> {orderDetails.customer.name}</p>
              <p><strong>البريد الإلكتروني:</strong> {orderDetails.customer.email}</p>
              <p><strong>رقم الهاتف:</strong> {orderDetails.customer.phone}</p>
              <p><strong>العنوان:</strong> {orderDetails.customer.address}</p>
            </div>
          </div>
        </Col>
        
        <Col md="6">
          <div className="order-details-card p-3">
            <h5 className="mb-3">معلومات الطلب</h5>
            <div className="order-info">
              <p><strong>تاريخ الطلب:</strong> {new Date(orderDetails.orderDate).toLocaleDateString('ar-EG')}</p>
              <p><strong>حالة الطلب:</strong></p>
              <select 
                className="form-select mb-3"
                value={orderDetails.status}
                onChange={handleStatusChange}
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p><strong>إجمالي الطلب:</strong> {orderDetails.totalPrice} جنيه</p>
            </div>
          </div>
        </Col>
      </Row>

      <div className="order-products mt-4">
        <h5 className="mb-3">المنتجات</h5>
        {orderDetails.products.map(product => (
          <div key={product.id} className="product-item d-flex align-items-center p-3 mb-2 border rounded">
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              className="me-3"
            />
            <div className="flex-grow-1">
              <h6>{product.name}</h6>
              <p className="mb-0">
                الكمية: {product.quantity} × {product.price} جنيه = {product.quantity * product.price} جنيه
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-end mt-4">
        <button className="btn btn-primary">
          حفظ التغييرات
        </button>
      </div>
    </div>
  );
};

export default AdminOrderDetails; 