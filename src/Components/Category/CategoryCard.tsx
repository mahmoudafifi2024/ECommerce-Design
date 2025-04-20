import React from 'react';
import { Col } from 'react-bootstrap';

interface CategoryCardProps {
  title: string;
  img: string;
  background?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  img, 
  background = "#F4F4F4" 
}) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-4 d-flex justify-content-around">
      <div className="allCard mb-3">
        <div
          className="category-card"
          style={{ backgroundColor: background }}>
          <img width={140} src={img} alt={title} className="category-card-img" />
          <p className="category-card-text my-2">{title}</p>
        </div>
      </div>
    </Col>
  );
};

export default CategoryCard; 