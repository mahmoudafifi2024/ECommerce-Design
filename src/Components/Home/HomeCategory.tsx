import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryCard from '../Category/CategoryCard';
import SubTitle from '../Utility/SubTitle';

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

const HomeCategory: React.FC = () => {
  const categories: Category[] = [
    {
      id: '1',
      name: 'الأجهزة الإلكترونية',
      image: '/src/Images/cat2.png',
      description: 'أحدث الأجهزة الإلكترونية'
    },
    {
      id: '2',
      name: 'الموضة والأزياء',
      image: '/src/Images/clothe.png',
      description: 'أحدث صيحات الموضة'
    },
    {
      id: '3',
      name: 'المنزل والحديقة',
      image: '/src/Images/item.png',
      description: 'مستلزمات المنزل والحديقة'
    },
    {
      id: '4',
      name: 'الرياضة',
      image: '/src/Images/prod1.png',
      description: 'معدات رياضية احترافية'
    }
  ];

  return (
    <Container>
      <SubTitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className='my-2 d-flex justify-content-between'>
        {categories.map((category) => (
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

export default HomeCategory; 