import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
}

interface RateItemProps {
  review: Review;
}

const RateItem: React.FC<RateItemProps> = ({ review }) => {
  return (
    <div className="review-card my-3">
      <Row className="d-flex">
        <Col className="d-flex me-5">
          <div className="rate-name d-inline ms-2">{review.user.name}</div>
          <img className="user-img" src={review.user.avatar} alt="" />
        </Col>
      </Row>
      <Row>
        <Col className="me-4 mt-2">
          <ReactStars
            count={5}
            size={16}
            value={review.rating}
            edit={false}
            activeColor="#ffd700"
          />
        </Col>
      </Row>
      <Row>
        <Col className="me-4 mt-2">
          <div className="rate-description">{review.comment}</div>
        </Col>
      </Row>
      <Row>
        <Col className="me-4 mt-2">
          <div className="rate-date">{new Date(review.date).toLocaleDateString('ar-EG')}</div>
        </Col>
      </Row>
    </div>
  );
};

export default RateItem; 