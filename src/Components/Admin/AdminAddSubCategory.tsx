import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface Category {
  _id: string;
  name: string;
}

const AdminAddSubCategory: React.FC = () => {
  const staticCategories: Category[] = [
    { _id: "1", name: "الإلكترونيات" },
    { _id: "2", name: "الملابس" },
    { _id: "3", name: "الأثاث" }
  ];

  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
          />
          <select name="category" className="select mt-3 px-2">
            <option value="0">اختر تصنيف رئيسي</option>
            {staticCategories.map(item => (
              <option key={item._id} value={item._id}>{item.name}</option>
            ))}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button className="btn-save d-inline mt-2">حفظ التعديلات</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddSubCategory; 