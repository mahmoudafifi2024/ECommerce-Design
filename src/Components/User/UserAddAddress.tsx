import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface AddressForm {
  alias: string;
  details: string;
  phone: string;
}

const UserAddAddress: React.FC = () => {
  const [formData, setFormData] = React.useState<AddressForm>({
    alias: '',
    details: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Address:', formData);
  };

  return (
    <div>
      <div className="admin-content-text pb-4">اضافة عنوان جديد</div>
      <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between">
          <Col sm="12">
            <input
              type="text"
              className="input-form d-block mt-3 px-3"
              value={formData.alias}
              onChange={(e) => setFormData({ ...formData, alias: e.target.value })}
              placeholder="تسمية العنوان (المنزل - العمل)"
            />
            <textarea
              className="input-form-area p-2 mt-3"
              rows={4}
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="العنوان بالتفصيل"
            />
            <input
              type="text"
              className="input-form d-block mt-3 px-3"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="رقم الهاتف"
            />
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="d-flex justify-content-end">
            <button className="btn-save d-inline mt-2" onClick={handleSubmit}>
              اضافة عنوان
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserAddAddress; 