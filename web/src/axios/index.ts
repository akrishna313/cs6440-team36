import axios from 'axios';

const BASE_URL = 'http://localhost:8000';
export const login = async (body: any) => axios.post(`${BASE_URL}/api/login`, body);