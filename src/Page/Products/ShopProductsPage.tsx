

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Pagination from '../../Components/Utility/Pagination';
import SearchCountResult from '../../Components/Utility/SearchCountResult';
import SideFilter from '../../Components/Utility/SideFilter';

const ShopProductsPage: React.FC = () => {
  const items = [
    { 
      _id: '1', 
      title: 'منتج 1', 
      description: 'وصف المنتج 1', 
      price: 100, 
      imageCover: '/src/Images/mobile1.png', 
      category: 'إلكترونيات', 
      ratingsAverage: 4.5, 
      ratingsQuantity: 10 
    },
    { 
      _id: '1', 
      title: 'منتج 1', 
      description: 'وصف المنتج 1', 
      price: 100, 
      imageCover: '/src/Images/mobile1.png', 
      category: 'إلكترونيات', 
      ratingsAverage: 4.5, 
      ratingsQuantity: 10 
    },
    { 
      _id: '2', 
      title: 'منتج 2', 
      description: 'وصف المنتج 2', 
      price: 200, 
      imageCover: '/src/Images/mobile2.png', 
      category: 'إلكترونيات', 
      ratingsAverage: 4.3, 
      ratingsQuantity: 8 
    }
  ];
  
  const results = items.length;
  const pageCount = 3;

  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title={`هناك ${results} نتيجة بحث`} onClick={() => {}} />
        <Row className='d-flex flex-row'>
          <Col sm="2" xs="2" md="1" className='d-flex'>
            <SideFilter /> 
          </Col>
          <Col sm="10" xs="10" md="11">
            <CardProductsContainer 
              products={items} 
              title="المنتجات المتاحة" 
              btntitle="عرض المزيد" 
            />
          </Col>
        </Row>
        <Pagination pageCount={pageCount} onPageChange={() => {}} />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
