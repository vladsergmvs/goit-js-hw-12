import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// //////////////////////////////////
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getData } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

//////////////////////////////////////////////////////

const form = document.querySelector('.js-search-form'),
  galleryList = document.querySelector('.js-gallery-list'),
  loader = document.querySelector('.loader'),
  loadMore = document.querySelector('.js-load-more');

document.querySelector('.search-input').addEventListener('click', event => {
  event.target.value = '';
});

//////////////////////////////////////////////////////

form.addEventListener('submit', handleSubmit);

/////////
let page = 1;
let searchQuery = null;
/////////
async function handleSubmit(event) {
  event.preventDefault();
  loader.classList.add('is-hidden');
  page = 1;
  searchQuery = event.target.elements.searchQuery.value.trim();
  if (searchQuery === '') {
    return;
  }
  try {
    const response = await getData(searchQuery, page);
    if (response.hits.length !== 0) {
      galleryList.innerHTML = createMarkup(response.hits);
      response.totalHits > 15
        ? loadMore.classList.add('is-hidden')
        : loadMore.classList.remove('is-hidden');
      showGallery();
    } else {
      galleryList.innerHTML = '';
      iziToastMessage(
        'Sorry, there are no images matching your search query. Please try again!',
        'red'
      );
    }
  } catch (error) {
    console.log(error);
  } finally {
    loader.classList.remove('is-hidden');
  }
  /////////
}
////////////////////////////////////////////////

loadMore.addEventListener('click', handleClick);

async function handleClick(event) {
  /////
  page += 1;
  loader.classList.add('is-hidden');

  try {
    const response = await getData(searchQuery, page);
    if (response.hits.length !== 0) {
      galleryList.insertAdjacentHTML('beforeend', createMarkup(response.hits));
      const lastPage = Math.ceil(response.totalHits / 15);
      lastPage === page
        ? (loadMore.classList.remove('is-hidden'),
          iziToastMessage(
            "We're sorry, but you've reached the end of search results.",
            'blue'
          ))
        : loadMore.classList.add('is-hidden');
      showGallery();
    } else {
      galleryList.innerHTML = '';
      iziToastMessage();
    }

    const card = document.querySelector('.gallery-list-item'),
      cardHeight = card.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log(error);
  } finally {
    loader.classList.remove('is-hidden');
  }
  ///
}

//////////////////////////////////////////////
function showGallery() {
  let gallery = new SimpleLightbox('.js-gallery-list a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  gallery.refresh();
}
///////////////////////////////////////////
function iziToastMessage(message, color) {
  iziToast.info({
    message: `${message}`,
    position: 'topRight',
    color: `${color}`,
  });
}
/////////////////////////////////
