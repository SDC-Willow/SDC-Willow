/* eslint-disable camelcase */
const axios = require('axios');
const apiToken = process.env.API_TOKEN;

const getReviews = (product, sort) => {
  return axios.get('http://localhost:3000/reviews', {
    params: {
      sort: sort,
      count: 100,
      product_id: product
    }
  }).then((results) => {
    return results.data.results;
  });
};
const getMeta = (product) => {
  return axios.get(`http://localhost:3000/reviews/meta/?product_id=${product}`).then((results) => {
    return results.data;
  });
};
const putHelp = (reviewID) => {
  return axios.put(`http://localhost:3000/reviews/helpful/?review_id=${reviewID}`, null);
};

const postReview = (obj) => {
  const { product_id, rating, summary, body, recommend, name, email, characteristics } = obj;
  const data = { product_id: product_id, rating: rating, summary: summary, body: body, recommend: recommend, name: name, email: email, characteristics: characteristics, photos: [] };
  return axios.post('http://localhost:3000/reviews', data);
};

const putReport = (reviewID) => {
  return axios.put(`http://localhost:3000/reviews/report?review_id=${reviewID}`, null);
};

module.exports.getReviews = getReviews;
module.exports.getMeta = getMeta;
module.exports.putHelp = putHelp;
module.exports.postReview = postReview;
module.exports.putReport = putReport;