import axios from 'axios';

const increaseHelp = (reviewId) => {
  console.log('🐿', reviewId);
  axios.put('/atelier/reviews/helpful', null, {
    params: {
      review_id: reviewId
    }
  });
};

export default increaseHelp;
