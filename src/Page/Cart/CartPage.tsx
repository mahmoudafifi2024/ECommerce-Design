import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CartCheckout from '../../Components/Cart/CartCheckout';
import CartItem from '../../Components/Cart/CartItem';

interface CartItemType {
  id: string;
  product: {
    title: string;
    imageCover?: string;
    ratingsAverage?: number;
    brand?: { name: string };
    category?: { name: string };
  };
  color?: string;
  quantity: number;
  price: number;
}

const cartItems: CartItemType[] = [
  {
    id: '1',
    product: {
      title: 'هاتف آيفون 14 برو ماكس',
      imageCover: '/src/Images/mobile1.png',
      ratingsAverage: 4.8,
      brand: { name: 'Apple' },
      category: { name: 'الهواتف' }
    },
    color: '#000000',
    quantity: 1,
    price: 45000,
  },
  {
    id: '2',
    product: {
      title: 'ساعة آبل ووتش سيريز 7',
      imageCover: '/src/Images/mobile2.png',
      ratingsAverage: 4.5,
      brand: { name: 'Apple' },
      category: { name: 'الساعات الذكية' }
    },
    color: '#FF0000',
    quantity: 2,
    price: 12000,
  },
];

const totalCartPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const couponNameRes = 'خصم 10%';
const totalCartPriceAfterDiscount = totalCartPrice * 0.9;

const CartPage: React.FC = () => {
  return (
    <Container style={{ minHeight: '670px' }}>
      <Row>
        <div className='cart-title mt-4'>عربة التسوق</div>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col xs='12' md='9'>
          {cartItems.length >= 1 ? (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <h6>لا يوجد منتجات فى العربة</h6>
          )}
        </Col>
        <Col xs='6' md='3'>
          <CartCheckout 
            couponNameRes={couponNameRes}
            totalCartPriceAfterDiscount={totalCartPriceAfterDiscount}
            totalCartPrice={totalCartPrice}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
