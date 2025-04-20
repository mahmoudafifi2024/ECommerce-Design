import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserAddressCard from './UserAddressCard';

interface Address {
  id: string;
  alias: string;
  details: string;
  phone: string;
}

const UserAllAddress: React.FC = () => {
  const [addresses, setAddresses] = React.useState<Address[]>([
    {
      id: "1",
      alias: "المنزل",
      details: "القاهرة، المعادي، شارع 9",
      phone: "0123456789"
    },
    {
      id: "2",
      alias: "العمل",
      details: "القاهرة، مدينة نصر، شارع التسعين",
      phone: "0123456788"
    }
  ]);

  const handleDeleteAddress = (addressId: string) => {
    setAddresses(addresses.filter(address => address.id !== addressId));
  };

  return (
    <div>
      <div className="admin-content-text pb-4">دفتر العناوين</div>
      {addresses.map((address) => (
        <UserAddressCard 
          key={address.id} 
          address={address}
          onDelete={handleDeleteAddress}
        />
      ))}

      <Row className="justify-content-center">
        <Col sm="5">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">اضافة عنوان جديد</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAddress; 