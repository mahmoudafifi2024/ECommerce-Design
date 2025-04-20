import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BrandCard from './BrandCard';

interface Brand {
  id: string;
  name: string;
  image: string;
}

interface BrandContainerProps {
  brands: Brand[];
}

const BrandContainer: React.FC<BrandContainerProps> = ({ brands }) => {
  return (
    <Container>
      <Row className='my-1 d-flex justify-content-between'>
        {brands.map(brand => (
          <BrandCard key={brand.id} img={brand.image} name={brand.name} />
        ))}
      </Row>
    </Container>
  );
};

export default BrandContainer;