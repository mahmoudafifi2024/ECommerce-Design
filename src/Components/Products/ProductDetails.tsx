import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductGallery from './ProductGallery';
import ProductText from './ProductText';

interface ProductImage {
  id: string;
  url: string;
}

interface ProductDetails {
  id: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  priceAfterDiscount?: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  colors: string[];
  images: ProductImage[];
  specifications: Record<string, string>;
}

const ProductDetails: React.FC = () => {
  const productData: ProductDetails = {
    id: '1',
    title: 'ايفون 14 برو ماكس',
    description: 'هاتف ذكي متطور مع كاميرا احترافية وأداء قوي',
    category: 'الهواتف الذكية',
    brand: 'آبل',
    price: 45000,
    priceAfterDiscount: 42000,
    ratingsAverage: 4.8,
    ratingsQuantity: 120,
    colors: ['#FFFFFF', '#FFD700', '#000000', '#8A2BE2', '#FF5733'],
    images: [
      { id: '1', url: '/src/Images/mobile.png' },
      { id: '2', url: '/src/Images/mobile1.png' },
      { id: '3', url: '/src/Images/mobile2.png' }
    ],
    specifications: {
      'الشاشة': '6.7 بوصة',
      'الذاكرة': '256 جيجابايت',
      'المعالج': 'A16 Bionic',
      'البطارية': '4323 مللي أمبير'
    }
  };

  return (
    <div>
      <Row className="py-3">
        <Col lg={4}>
          <ProductGallery images={productData.images.map(image => image.url)} />
        </Col>
        <Col lg={8}>
          <ProductText product={productData} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
