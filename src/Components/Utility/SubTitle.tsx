import React from 'react';
import { Link } from 'react-router-dom';

interface SubTitleProps {
  title: string;
  btntitle?: string;
  pathText?: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ 
  title, 
  btntitle, 
  pathText 
}) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="sub-tile">{title}</div>
      {btntitle && pathText && (
        <Link to={pathText} style={{ textDecoration: 'none' }}>
          <div className="shopping-now">{btntitle}</div>
        </Link>
      )}
    </div>
  );
};

export default SubTitle; 