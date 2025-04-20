import React from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from '../Products/ProductCard';

interface FavoriteProduct {
  _id: string;
  title: string;
  description: string;
  imageCover: string;
  price: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  category: string;
}

const UserFavoriteProduct: React.FC = () => {
  const favoriteProducts: FavoriteProduct[] = [
    {
      _id: "1",
      title: "ايفون 14 برو ماكس",
      description: "هاتف ذكي متطور",
      imageCover: "/images/iphone.png",
      price: 45000,
      ratingsAverage: 4.5,
      ratingsQuantity: 120,
      category: "الهواتف"
    },
    {
      _id: "2",
      title: "سامسونج جالاكسي S23",
      description: "هاتف ذكي متطور",
      imageCover: "/images/samsung.png",
      price: 35000,
      ratingsAverage: 4.3,
      ratingsQuantity: 90,
      category: "الهواتف"
    }
  ];

  return (
    <div>
      <div className="admin-content-text pb-4">المنتجات المفضلة</div>
      <Row className='justify-content-start'>
        {favoriteProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default UserFavoriteProduct; 