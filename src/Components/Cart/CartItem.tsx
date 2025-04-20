import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import mobile from '../../images/mobile.png';
import deleteicon from '../../images/delete.png';

interface CartItemProps {
  item: {
    id: string;
    product: {
      title: string;
      imageCover?: string;
      ratingsAverage?: number;
      brand?: { name: string };
      category?: { name: string };
    };
    color?: string;
    quantity: number;
    price: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [show, setShow] = useState(false);
  const [itemCount, setItemCount] = useState(item.quantity);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleDeleteItem = () => {
    console.log(`Deleted item with id: ${item.id}`);
    handleClose();
  };
  const handleUpdateCart = () => {
    console.log(`Updated quantity to: ${itemCount}`);
  };

  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>تاكيد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متأكد من حذف المنتج من العربة؟</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>تراجع</Button>
          <Button variant="dark" onClick={handleDeleteItem}>حذف</Button>
        </Modal.Footer>
      </Modal>

      <img width="160px" height="197px" src={item.product.imageCover || mobile} alt="Product" />

      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className="d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">{item.product.category?.name || ""}</div>
            <div onClick={handleShow} className="d-flex pt-2" style={{ cursor: "pointer" }}>
              <img src={deleteicon} alt="Delete" width="20px" height="24px" />
              <div className="cat-text d-inline me-2">إزالة</div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-2">
          <Col sm="12" className="d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">{item.product.title}</div>
            <div className="d-inline pt-2 cat-rate me-2">{item.product.ratingsAverage || 0}</div>
          </Col>
        </Row>

        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="brand-text d-inline mx-1">{item.product.brand?.name || ""}</div>
          </Col>
        </Row>

        <Row>
          <Col sm="12" className="mt-1 d-flex">
            {item.color && (
              <div className="color ms-2 border" style={{ backgroundColor: item.color }}></div>
            )}
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className="d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text mt-2 d-inline">الكمية</div>
              <input
                value={itemCount}
                onChange={(e) => setItemCount(Number(e.target.value))}
                className="mx-2 text-center"
                type="number"
                style={{ width: "60px", height: "40px" }}
              />
              <Button onClick={handleUpdateCart} className='btn btn-dark'>تطبيق</Button>
            </div>
            <div className="d-inline pt-2 brand-text">{item.price} جنيه</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CartItem;
