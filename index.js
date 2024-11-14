import{i as m,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",o="47047492-675b2ed8a2567f743231acd4f";function f(s){const i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}?${o}&${i}`).then(t=>{if(!t.ok)throw new Error("Error!!!");return t.json()})}function p(s){return s.map(({largeImageURL:i,webformatURL:t,tags:l,likes:e,views:r,comments:a,downloads:u})=>`
       <li class="gallery-list-item">
     <a class="gallery-list-item-link" href="${i}" >
      <img class="gallery-image" src="${t}" alt="${l}"/>
    </a>           
              <ul class="gallery-card-list">
              <li class="gallery-card-list-item">
                  <h3>Likes</h3>
                  <p>"${e}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Views</h3>
                  <p>"${r}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Comments</h3>
                  <p>"${a}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Downloads</h3>
                  <p>"${u}"</p>
              </li>
              </ul>
                  
  </li>
    `).join("")}const y=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery-list"),n=document.querySelector(".loader");document.querySelector(".search-input").addEventListener("click",s=>{s.target.value=""});y.addEventListener("submit",g);function g(s){n.classList.add("is-open"),s.preventDefault();const i=s.target.elements.searchQuery.value;i!==""&&f(i).then(t=>{t.hits.length!==0?c.innerHTML=p(t.hits):(m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML=""),n.classList.remove("is-open"),new d(".js-gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{console.log("catch",t)})}
//# sourceMappingURL=index.js.map
