import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAllProducts from '../../Components/Admin/AdminAllProducts';
import Pagination from '../../Components/Utility/Pagination';



const AdminAllProductsPage: React.FC = () => {
  const pageCount = 1;
  
  return (
    <Container>
      <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllProducts  />
          {pageCount > 1 && <Pagination pageCount={pageCount} />}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
