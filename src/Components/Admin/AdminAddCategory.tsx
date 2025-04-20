import React from 'react';
import { Row, Col } from 'react-bootstrap';
import avatar from '../../images/avatar.png';

interface CategoryForm {
  name: string;
  image: File | null;
}

const AdminAddCategory: React.FC = () => {
  const [img, setImg] = React.useState<string>(avatar);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [categoryName, setCategoryName] = React.useState<string>('');

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImg(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (selectedFile) {
      formData.append('image', selectedFile);
    }
    formData.append('name', categoryName);
    console.log('Form Data:', { name: categoryName, file: selectedFile });
  };

  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">اضافة تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صورة التصنيف</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="category"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              id="upload-photo"
              onChange={onImageChange}
              style={{ display: "none" }}
            />
          </div>
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddCategory; 