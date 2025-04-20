import React from 'react';
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Slider from '../../Components/Home/Slider';
import DiscountSection from '../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';

const staticProducts = [
  {
    _id: '1',
    title: 'منتج 1',
    description: 'وصف المنتج 1',
    price: 100,
    imageCover: '/src/images/prod1.png',
    category: 'ملابس',
    ratingsAverage: 4.5,
    ratingsQuantity: 120,
  },
  {
    _id: '2',
    title: 'منتج 2',
    description: 'وصف المنتج 2',
    price: 150,
    imageCover: '/src/images/prod1.png',
    category: 'إلكترونيات',
    ratingsAverage: 4.7,
    ratingsQuantity: 95,
  },
  {
    _id: '3',
    title: 'منتج 3',
    description: 'وصف المنتج 3',
    price: 200,
    imageCover: '/src/images/prod1.png',
    category: 'أحذية',
    ratingsAverage: 4.8,
    ratingsQuantity: 85,
  },
];

const HomePage: React.FC = () => {
  return (
    <div className='font' style={{ minHeight: '670px' }}>
      <Slider />
      <HomeCategory />
      
      <CardProductsContainer 
        products={[]} 
        title="الاكثر مبيعا" 
        btntitle="المزيد" 
        pathText="/products" 
      />
      <DiscountSection />

      <CardProductsContainer 
        products={staticProducts} 
        title="احدث الازياء" 
        btntitle="المزيد" 
        pathText="/products" 
      />
      <BrandFeatured />
    </div>
  );
};

export default HomePage;