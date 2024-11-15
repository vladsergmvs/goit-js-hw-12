import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// //////////////////////////////////
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

import { getData } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

//////////////////////////////////////////////////////

const form = document.querySelector('.js-search-form'),
  galleryList = document.querySelector('.js-gallery-list'),
  loader = document.querySelector('.loader');

document.querySelector('.search-input').addEventListener('click', event => {
  event.target.value = '';
});

//////////////////////////////////////////////////////

form.addEventListener('submit', handleSubmit);

/////////
async function handleSubmit(event) {
  loader.classList.add('is-open');
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery.value.trim();
  if (searchQuery === '') {
    return;
  }
  try {
    const response = await getData(searchQuery);
    if (response.hits.length !== 0) {
      galleryList.innerHTML = createMarkup(response.hits);

      let gallery = new SimpleLightbox('.js-gallery-list a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      gallery.refresh();
    } else {
      galleryList.innerHTML = '';
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    loader.classList.remove('is-open');
  }
  /////////
}
