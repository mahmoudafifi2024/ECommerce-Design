import React from 'react';
import CategoryContainer from '../../Components/Category/CategoryContainer';
import Pagination from '../../Components/Utility/Pagination';


const AllCategoryPage: React.FC = () => {
  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryContainer   />
      <Pagination pageCount={1}  />
    </div>
  );
};

export default AllCategoryPage;