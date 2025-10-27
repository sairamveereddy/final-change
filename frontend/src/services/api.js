import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const getPlans = async (category = null, type = null) => {
  try {
    let url = `${API}/plans`;
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (type) params.append('type', type);
    if (params.toString()) url += `?${params.toString()}`;
    
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching plans:', error);
    throw error;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API}/contact`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
