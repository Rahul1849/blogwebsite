import axios from 'axios';

const API_URL = 'http://localhost:3000/api';  

export const fetchPosts = () => {
  return axios.get(`${API_URL}/posts`);
};

export const fetchPostById = (postId) => {
  return axios.get(`${API_URL}/posts/${postId}`);
};
