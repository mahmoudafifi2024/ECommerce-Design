import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAddSubCategory from '../../Components/Admin/AdminAddSubCategory';

const AdminAddSubCategoryPage: React.FC = () => {
  return (
    <Container>
      <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAddSubCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddSubCategoryPage; 