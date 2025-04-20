import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryCard from '../../Components/Category/CategoryCard';

interface Category {
  _id: string;
  name: string;
  image: string;
}

const staticCategories: Category[] = [
  { _id: '1', name: 'الأجهزة الإلكترونية', image: '/src/Images/sale.png' },
  { _id: '2', name: 'الملابس', image: '/src/Images/sale.png' },
  { _id: '3', name: 'الأجهزة المنزلية', image: '/src/Images/sale.png' },
  { _id: '4', name: 'العناية الشخصية', image: '/src/Images/sale.png' },
  { _id: '5', name: 'الرياضة', image: '/src/Images/sale.png' },
  { _id: '6', name: 'الكتب', image: '/src/Images/sale.png'}
];

const CategoryContainer: React.FC<{ data: Category[]; loading: boolean; }> = ({ data, loading }) => {
  return (
    <Container>
      <div className="admin-content-text mt-3">كل المركات</div>
      <Row className='my-2 d-flex justify-content-between'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map(category => (
            <CategoryCard
              key={category._id}
              title={category.name}
              img={category.image}
              background="#F4F4F4"
            />
          ))
        )}
      </Row>
    </Container>
  );
};

const AllCategoryPage: React.FC = () => {
  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryContainer data={staticCategories} loading={false} />
    </div>
  );
};

export default AllCategoryPage;