import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import rate from '../../images/rate.png';
import Pagination from '../Utility/Pagination'; // ✅ تأكد من صحة المسار
import RateItem from './RateItem';
import RatePost from './RatePost';



interface RateContainerProps {
  rateAvg: number;
  rateQty: number;
}

const RateContainer: React.FC<RateContainerProps> = ({ rateAvg, rateQty }) => {
  const allReview = {
    data: [
      {
        id: '1',
        user: { name: 'محمد أحمد', avatar: '/images/user1.png' },
        rating: 5,
        comment: 'منتج رائع جدًا، أنصح به!',
        date: '2025-03-26',
      },
      {
        id: '2',
        user: { name: 'سارة علي', avatar: '/images/user2.png' },
        rating: 4,
        comment: 'جودة ممتازة لكن السعر مرتفع قليلاً.',
        date: '2025-03-25',
      },
    ],
    paginationResult: { numberOfPages: 2 },
  };

  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1">التقييمات</div>
          <img className="mt-2" src={rate} alt="Rating Icon" height="16px" width="16px" />
          <div className="cat-rate d-inline p-1 pt-2">{rateAvg}</div>
          <div className="rate-count d-inline p-1 pt-2">({`${rateQty} تقييم`})</div>
        </Col>
      </Row>

      <RatePost />

      {allReview.data.length > 0 ? (
        allReview.data.map((review) => <RateItem key={review.id} review={review} />)
      ) : (
        <h6>لا يوجد تقييمات الآن</h6>
      )}

      {allReview.paginationResult?.numberOfPages >= 2 && (
        <Pagination pageCount={allReview.paginationResult.numberOfPages}  />
      )}
    </Container>
  );
};

export default RateContainer;
