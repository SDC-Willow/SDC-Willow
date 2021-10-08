import axios from 'axios';

const postInteraction = (element) => {
  return axios.post('/atelier/reviews/interaction', { element: element });
};

export default postInteraction;
