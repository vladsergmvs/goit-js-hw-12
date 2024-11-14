const BASE_URL = 'https://pixabay.com/api/',
  API_KEY = '47047492-675b2ed8a2567f743231acd4f';

export function fetchData(searchQuery) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`${BASE_URL}?${API_KEY}&${params}`).then(response => {
    if (!response.ok) {
      throw new Error('Error!!!');
    }

    return response.json();
  });
}
