import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/',
  API_KEY = '47047492-675b2ed8a2567f743231acd4f';

export async function getData(searchQuery, page) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 15,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
