import React from 'react';
import { Container } from 'react-bootstrap';
import SubTitle from '../Utility/SubTitle';
import BrandContainer from './BrandContainer';

interface Brand {
  id: string;
  name: string;
  image: string;
}

const BrandFeatured: React.FC = () => {
  const brands: Brand[] = [
    { id: '1', name: 'POLO', image: '/src/Images/brand1.png' },
    { id: '2', name: 'Tupperware', image: '/src/Images/brand2.png' },
    { id: '3', name: 'LG', image: '/src/Images/brand3.png' }
  ];

  return (
    <Container>
      <SubTitle title="أشهر الماركات" btntitle="المزيد" pathText="/allbrand" />
      <BrandContainer brands={brands} />
    </Container>
  );
};

export default BrandFeatured;