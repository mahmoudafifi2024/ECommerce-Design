import React from 'react';
import { Row } from 'react-bootstrap';
import AdminAllOrdersItem from './AdminAllOrdersItem';

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

const AdminAllOrders: React.FC = () => {
  // بيانات تجريبية للعرض
  const orders: Order[] = [
    {
      _id: "1",
      user: {
        name: "أحمد محمد",
        email: "ahmed@example.com",
        phone: "0123456789"
      },
      products: [
        {
          _id: "1",
          title: "ايفون 14 برو ماكس",
          quantity: 1,
          price: 45000,
          image: "/images/iphone.png"
        }
      ],
      totalPrice: 45000,
      status: "pending",
      createdAt: "2024-03-20"
    },
    {
      _id: "2",
      user: {
        name: "محمد علي",
        email: "mohamed@example.com",
        phone: "0123456788"
      },
      products: [
        {
          _id: "2",
          title: "لابتوب ديل XPS",
          quantity: 1,
          price: 35000,
          image: "/images/dell.png"
        }
      ],
      totalPrice: 35000,
      status: "delivered",
      createdAt: "2024-03-19"
    }
  ];

  return (
    <div>
      <div className='admin-content-text'>ادارة جميع الطلبات</div>
      <Row className='justify-content-start'>
        {orders.map((order) => (
          <AdminAllOrdersItem key={order._id} order={order} />
        ))}
      </Row>
    </div>
  );
};

export default AdminAllOrders;
