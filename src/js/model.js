import { API_KEY } from './config.js';

export const loadApi = async function () {
  try {
    const res = await fetch(
      `http://data.fixer.io/api/latest?access_key=${API_KEY}`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
