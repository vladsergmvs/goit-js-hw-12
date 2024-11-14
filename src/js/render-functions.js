export function createMarkup(array) {
    return array
      .map(
        ({
          largeImageURL,
          webformatURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => `
       <li class="gallery-list-item">
     <a class="gallery-list-item-link" href="${largeImageURL}" >
      <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
    </a>           
              <ul class="gallery-card-list">
              <li class="gallery-card-list-item">
                  <h3>Likes</h3>
                  <p>"${likes}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Views</h3>
                  <p>"${views}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Comments</h3>
                  <p>"${comments}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Downloads</h3>
                  <p>"${downloads}"</p>
              </li>
              </ul>
                  
  </li>
    `
      )
      .join('');
  }
  