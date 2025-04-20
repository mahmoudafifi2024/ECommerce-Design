import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';

interface Category {
  id: string;
  name: string;
  image: string;
}

const CategoryContainer: React.FC = () => {
  const categories: Category[] = [
    { id: '1', name: 'الأجهزة الإلكترونية', image: '/src/Images/sale.png' },
    { id: '1', name: 'الأجهزة الإلكترونية', image: '/src/Images/sale.png' },
    { id: '1', name: 'الأجهزة الإلكترونية', image: '/src/Images/sale.png' },
    { id: '1', name: 'الأجهزة الإلكترونية', image: '/src/Images/sale.png' },
    { id: '1', name: 'الأجهزة الإلكترونية', image: '/src/Images/sale.png' },
  ];

  return (
    <Container>
      <div className="admin-content-text mt-3">كل التصنيفات</div>
      <Row className='my-2 d-flex justify-content-between'>
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            title={category.name}
            img={category.image}
            background="#F4F4F4"
          />
        ))}
      </Row>
    </Container>
  );
};

export default CategoryContainer; 