// src/components/UserAllOrder.tsx
import React from 'react';
import { Row } from 'react-bootstrap';
import UserAllOrderItem from './UserAllOrderItem';

const UserAllOrder: React.FC = () => {
  const staticOrders = [
    {
      id: "1",
      status: "processing",
      date: "2024-04-08",
      products: [
        {
          id: "1",
          title: "آيفون 13",
          quantity: 1,
          price: 15000,
          image: "https://via.placeholder.com/60" // صورة تجريبية
        }
      ],
      totalPrice: 15000
    },
    {
      id: "2",
      status: "delivered",
      date: "2024-04-07",
      products: [
        {
          id: "2",
          title: "سامسونج S21",
          quantity: 1,
          price: 12000,
          image: "https://via.placeholder.com/60"
        }
      ],
      totalPrice: 12000
    }
  ];

  return (
    <div>
      <div className="admin-content-text pb-4">اهلا محمد علي</div>
      <Row className='justify-content-between'>
        {staticOrders.map((order) => (
          <UserAllOrderItem key={order.id} order={order} />
        ))}
      </Row>
    </div>
  );
};

export default UserAllOrder;
