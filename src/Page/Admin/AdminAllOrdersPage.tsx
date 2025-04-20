import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAllOrders from '../../Components/Admin/AdminAllOrders';
import Pagination from '../../Components/Utility/Pagination';

const AdminAllOrdersPage: React.FC = () => {
  return (
    <Container>
      <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllOrders />
          <Pagination pageCount={0} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllOrdersPage; 