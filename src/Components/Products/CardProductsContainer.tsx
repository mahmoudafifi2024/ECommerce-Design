import React from 'react';
import { Row } from 'react-bootstrap';
import SubTiltle from '../Utility/SubTitle';
import ProductCard from './ProductCard';

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

interface CardProductsContainerProps {
  title?: string;
  btntitle?: string;
  pathText?: string;
  products?: Product[];
}

const CardProductsContainer: React.FC<CardProductsContainerProps> = ({
  title,
  btntitle,
  pathText,
  products = []
}) => {
  const defaultProducts: Product[] = [
    {
      _id: '1',
      title: 'ايفون 14 برو ماكس',
      description: 'هاتف ذكي متطور',
      price: 45000,
      priceAfterDiscount: 42000,
      imageCover: '/src/Images/mobile2.png',
      category: 'الهواتف',
      ratingsAverage: 4.5,
      ratingsQuantity: 120
    },
    {
      _id: '1',
      title: 'ايفون 14 برو ماكس',
      description: 'هاتف ذكي متطور',
      price: 45000,
      priceAfterDiscount: 42000,
      imageCover: '/src/Images/Products/prod1.png',
      category: 'الهواتف',
      ratingsAverage: 4.5,
      ratingsQuantity: 120
    },
    {
      _id: '2',
      title: 'سامسونج جالاكسي S23',
      description: 'هاتف ذكي متطور',
      price: 35000,
      imageCover: '/src/Images/mobile1.png',
      category: 'الهواتف',
      ratingsAverage: 4.3,
      ratingsQuantity: 90
    }
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;


  return (
    <div className="container">
      {title && <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />}
      <Row className="my-2 d-flex justify-content-between">
        {displayProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default CardProductsContainer; 