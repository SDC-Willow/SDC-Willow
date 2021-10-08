const router = require('express').Router();
const { getReviews, getMeta, putHelp, postReview, putReport } = require('../helpers/reviews_helpers.js');

router.get('/reviews', (req, res) => {
  getReviews(req.query.productId, req.query.sort).then((results) => {
    res.send(results);
  }).catch((err) => {
    res.send([]);
  });
});

router.put('/reviews/helpful', (req, res) => {
  console.log('🦜', req.query.review_id)
  putHelp(req.query.review_id).then((response) => {
    res.end();
  }).catch((err) => console.log(err));
});

router.get('/reviews/meta', (req, res) => {
  getMeta(req.query.product_id).then((results) => {
    res.send(results);
  }).catch((err) => res.send([]));
});

router.put('/reviews/report', (req, res) => {
  
  putReport(req.query.review_id).then((results) => res.end());
});

router.post('/reviews', (req, res) => {
  postReview(req.body).then((response) => res.send('Success')).catch((err) => console.log(err));
});

module.exports = router;
