import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MultiImageInput } from 'react-multiple-image-input'; // التعديل هنا

interface Category {
  _id: string;
  name: string;
}

interface Brand {
  _id: string;
  name: string;
}

interface ProductData {
  title: string;
  description: string;
  price: string;
  quantity: string;
  category: string;
  brand: string;
  colors: string[];
  images: { [key: string]: string }; // نوع الصور
}

// تم تحديد نوع الصور لتجنب `any`
interface Images {
  [key: string]: string;  // كائن يحتوي على روابط الصور
}

const AdminAddProducts: React.FC = () => {
  // استخدام نوع دقيق للصور
  const [images, setImages] = React.useState<Images>({
    'image1': 'https://via.placeholder.com/150',
    'image2': 'https://via.placeholder.com/150',
  });

  const [productData, setProductData] = React.useState<ProductData>({
    title: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
    brand: '',
    colors: [],
    images: {}
  });

  const categories: Category[] = [
    { _id: '1', name: 'الكترونيات' },
    { _id: '2', name: 'ملابس' },
    { _id: '3', name: 'أجهزة منزلية' }
  ];

  const brands: Brand[] = [
    { _id: '1', name: 'ابل' },
    { _id: '2', name: 'سامسونج' },
    { _id: '3', name: 'ديل' }
  ];

  const colorOptions = ['#000000', '#FFFFFF', '#FF0000', '#0000FF', '#FFFF00'];

  const handleColorClick = (color: string) => {
    const updatedColors = productData.colors.includes(color)
      ? productData.colors.filter(c => c !== color)
      : [...productData.colors, color];
    
    setProductData({ ...productData, colors: updatedColors });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product Data:', { ...productData, images });
  };

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافة منتج جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صور للمنتج</div>
          
          {/* استخدام MultiImageInput مع الصور الافتراضية */}
          <MultiImageInput
            images={images}
            setImages={setImages}
            max={4}
            allowCrop={false}
            theme={{
              background: '#ffffff',
              outlineColor: '#111111',
              textColor: '#111111',
              buttonColor: '#007bff', // إضافة اللون المطلوب
              modalColor: '#f8f9fa'   // إضافة اللون المطلوب
            }}
          />

          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            value={productData.title}
            onChange={(e) => setProductData({ ...productData, title: e.target.value })}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows={4}
            cols={50}
            placeholder="وصف المنتج"
            value={productData.description}
            onChange={(e) => setProductData({ ...productData, description: e.target.value })}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر"
            value={productData.price}
            onChange={(e) => setProductData({ ...productData, price: e.target.value })}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحة"
            value={productData.quantity}
            onChange={(e) => setProductData({ ...productData, quantity: e.target.value })}
          />

          <select
            className="select input-form-area mt-3 px-2"
            value={productData.category}
            onChange={(e) => setProductData({ ...productData, category: e.target.value })}>
            <option value="">التصنيف</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>

          <select
            className="select input-form-area mt-3 px-2"
            value={productData.brand}
            onChange={(e) => setProductData({ ...productData, brand: e.target.value })}>
            <option value="">الماركة</option>
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>{brand.name}</option>
            ))}
          </select>

          <div className="text-form mt-3">الألوان المتاحة</div>
          <div className="mt-1 d-flex gap-2">
            {colorOptions.map((color) => (
              <div
                key={color}
                className="color-box"
                style={{
                  backgroundColor: color,
                  border: productData.colors.includes(color) ? '2px solid #000' : 'none',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>

          <button
            className="btn btn-dark d-block mt-4 px-3"
            onClick={handleSubmit}>
            حفظ المنتج
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddProducts;
