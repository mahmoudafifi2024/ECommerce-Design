import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Product {
  _id: string;
  title: string;
  imageCover: string;
  price: number;
  ratingsQuantity: number;
}

interface AdminAllProductsCardProps {
  item: Product;
}

const AdminAllProductsCard: React.FC<AdminAllProductsCardProps> = ({ item }) => {
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}>
        <Row className="d-flex justify-content-center px-2">
          <Col className="d-flex justify-content-between">
            <div className="d-inline item-delete-edit">ازاله</div>
            <Link to={`/admin/editproduct/${item._id}`} style={{ textDecoration: "none" }}>
              <div className="d-inline item-delete-edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
          <Card.Body>
            <Card.Title>
              <div className="card-title">
                {item.title}
              </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">{item.ratingsQuantity}</div>
                <div className="d-flex">
                  <div className="card-currency mx-1">جنيه</div>
                  <div className="card-price">{item.price}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard; 