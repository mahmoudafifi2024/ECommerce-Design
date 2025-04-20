import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface Category {
  id: string;
  name: string;
  isActive?: boolean;
}

const CategoryHeader: React.FC = () => {
  const categories: Category[] = [
    { id: 'all', name: 'الكل', isActive: true },
    { id: 'electronics', name: 'الكترونيات' },
    { id: 'clothes', name: 'ملابس' },
    { id: 'electrical', name: 'كهربيه' },
    { id: 'sales', name: 'تخفيضات' },
    { id: 'more', name: 'المزيد' }
  ];

  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className={`cat-text-header ${category.isActive ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                {category.name}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader; 