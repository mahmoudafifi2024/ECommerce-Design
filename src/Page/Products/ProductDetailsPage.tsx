import React from 'react';
import { Container } from 'react-bootstrap';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import ProductDetails from '../../Components/Products/ProductDetails';
import RateContainer from '../../Components/Rate/RateContainer';

// تعريف الواجهة لتحديد شكل بيانات المنتج
interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  category: string;
  ratingsAverage: number;
  ratingsQuantity: number;
}

const ProductDetailsPage: React.FC = () => {
  // بيانات ثابتة للمنتج
  const item: Product = {
    _id: '1',
    title: 'ايفون 14 برو ماكس',
    description: 'هاتف ذكي متطور',
    price: 45000,
    priceAfterDiscount: 42000,
    imageCover: '/src/Images/Products/mobile.png',
    category: 'الهواتف',
    ratingsAverage: 4.5,
    ratingsQuantity: 120,
  };

  // بيانات ثابتة للمنتجات المقترحة
  const items: Product[] = [
    {
      _id: '2',
      title: 'سامسونج جالاكسي S23',
      description: 'هاتف ذكي متطور',
      price: 35000,
      imageCover: '/src/Images/mobile.png',
      category: 'الهواتف',
      ratingsAverage: 4.3,
      ratingsQuantity: 90,
    },
    {
      _id: '3',
      title: 'شاومي مي 12',
      description: 'هاتف ذكي بأداء قوي',
      price: 25000,
      imageCover: '/src/Images/mobile3.png',
      category: 'الهواتف',
      ratingsAverage: 4.2,
      ratingsQuantity: 80,
    },
    {
      _id: '4',
      title: 'جوجل بيكسل 7',
      description: 'هاتف ذكي مزود بكاميرا قوية',
      price: 38000,
      imageCover: '/src/Images/mobile4.png',
      category: 'الهواتف',
      ratingsAverage: 4.7,
      ratingsQuantity: 110,
    },
  ];

  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer rateAvg={item.ratingsAverage} rateQty={item.ratingsQuantity} />
        <CardProductsContainer 
          products={items} 
          title="منتجات قد تعجبك" 
        />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
