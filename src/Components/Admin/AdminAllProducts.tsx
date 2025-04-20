import React from 'react';
import { Row } from 'react-bootstrap';
import AdminAllProductsCard from './AdminAllProductsCard';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageCover: string;
  category: string;
  ratingsQuantity: number;
  ratingsAverage: number;
}

const AdminAllProducts: React.FC = () => {
  const products: Product[] = [
    {
      _id: "1",
      title: "ايفون 14 برو ماكس",
      description: "هاتف ذكي متطور",
      price: 45000,
      imageCover: "/src/Images/mobile1.png",
      category: "الهواتف",
      ratingsQuantity: 120,
      ratingsAverage: 4.5
    },
    {
      _id: "2",
      title: "لابتوب ديل XPS",
      description: "لابتوب احترافي",
      price: 35000,
      imageCover: "/src/Images/mobile1.png",
      category: "لابتوب",
      ratingsQuantity: 85,
      ratingsAverage: 4.3
    }
  ];

  return (
    <div>
      <div className='admin-content-text'>ادارة جميع المنتجات</div>
      <Row className='justify-content-start'>
        {products.map((item) => (
          <AdminAllProductsCard key={item._id} item={item} />
        ))}
      </Row>
    </div>
  );
};

export default AdminAllProducts; 