import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import { CompactPicker } from 'react-color';

interface ProductData {
  _id: string;
  name: string;
  description: string;
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  category: string;
  brand: string;
  colors: string[];
  images: string[];
}

interface Category {
  _id: string;
  name: string;
}

interface Brand {
  _id: string;
  name: string;
}

const AdminEditProducts: React.FC = () => {
  const staticProduct: ProductData = {
    _id: "1",
    name: "آيفون 12",
    description: "هاتف ذكي متطور",
    price: 15000,
    priceAfterDiscount: 14000,
    quantity: 50,
    category: "1",
    brand: "1",
    colors: ["#FF0000", "#000000"],
    images: ["/images/product1.jpg", "/images/product2.jpg"]
  };

  const staticCategories: Category[] = [
    { _id: "1", name: "الإلكترونيات" },
    { _id: "2", name: "الملابس" }
  ];

  const staticBrands: Brand[] = [
    { _id: "1", name: "آبل" },
    { _id: "2", name: "سامسونج" }
  ];

  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">تعديل المنتج - {staticProduct.name}</div>
        <Col sm="8">
          <div className="text-form pb-2">صور المنتج</div>
          
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            value={staticProduct.name}
          />
          
          <textarea
            className="input-form-area p-2 mt-3"
            rows={4}
            cols={50}
            placeholder="وصف المنتج"
            value={staticProduct.description}
          />
          
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            value={staticProduct.price}
          />
          
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
            value={staticProduct.priceAfterDiscount}
          />
          
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحة"
            value={staticProduct.quantity}
          />
          
          <select
            className="select input-form-area mt-3 px-2"
            value={staticProduct.category}>
            <option value="0">التصنيف الرئيسي</option>
            {staticCategories.map(item => (
              <option key={item._id} value={item._id}>{item.name}</option>
            ))}
          </select>
          
          <select
            className="select input-form-area mt-3 px-2"
            value={staticProduct.brand}>
            <option value="0">اختر ماركة</option>
            {staticBrands.map(item => (
              <option key={item._id} value={item._id}>{item.name}</option>
            ))}
          </select>
          
          <div className="text-form mt-3">الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {staticProduct.colors.map((color, index) => (
              <div
                key={index}
                className="color ms-2 border mt-1"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
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

export default AdminEditProducts; 