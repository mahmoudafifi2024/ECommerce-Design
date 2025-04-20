import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

interface RatePostState {
  rating: number;
  comment: string;
}

const RatePost: React.FC = () => {
  const [rateData, setRateData] = React.useState<RatePostState>({
    rating: 0,
    comment: ''
  });

  const handleRatingChange = (newRating: number) => {
    setRateData({ ...rateData, rating: newRating });
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRateData({ ...rateData, comment: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Rate Data:', rateData);
  };

  return (
    <div className="rate-post mt-3">
      <Row className="mt-3">
        <Col sm="12" className="me-5 d-flex">
          <div className="rate-name d-inline ms-3 mt-1">علي محمد</div>
          <ReactStars
            count={5}
            onChange={handleRatingChange}
            size={16}
            activeColor="#ffd700"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm="12" className="me-5">
          <textarea
            className="input-form-area p-2 mt-3"
            rows={4}
            cols={20}
            placeholder="اكتب تعليقك...."
            value={rateData.comment}
            onChange={handleCommentChange}
          />
          <div className="d-flex justify-content-end">
            <button 
              className="btn-save d-inline mt-2" 
              onClick={handleSubmit}>
              اضف تعليق
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RatePost; 