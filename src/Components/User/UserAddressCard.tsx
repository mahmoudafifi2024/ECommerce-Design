import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Address {
  id: string;
  alias: string;
  details: string;
  phone: string;
}

interface UserAddressCardProps {
  address: Address;
  onDelete?: (id: string) => void;
}

const UserAddressCard: React.FC<UserAddressCardProps> = ({ 
  address,
  onDelete 
}) => {
  return (
    <div className="user-address-card my-3 px-2">
      <Row className="d-flex justify-content-between">
        <Col xs="1">
          <div className="p-2">{address.alias}</div>
        </Col>
        <Col xs="4" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <Link
              to={`/user/edit-address/${address.id}`}
              className="text-decoration-none"
              style={{ color: 'inherit' }}>
              <div className="d-flex mx-2">
                <img
                  alt="edit"
                  className="ms-1 mt-2"
                  src="/images/edit.png"
                  height="17px"
                  width="15px"
                />
                <p className="item-delete-edit">تعديل</p>
              </div>
            </Link>
            <div 
              className="d-flex mx-2" 
              onClick={() => onDelete && onDelete(address.id)}
              style={{ cursor: 'pointer' }}>
              <img
                alt="delete"
                className="ms-1 mt-2"
                src="/images/delete.png"
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit">ازاله</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontSize: "14px",
            }}>
            {address.details}
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontSize: "16px",
            }}>
            رقم الهاتف:
          </div>

          <div
            style={{
              color: "#979797",
              fontSize: "16px",
            }}
            className="mx-2">
            {address.phone}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddressCard; 