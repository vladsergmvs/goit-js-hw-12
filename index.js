import{a as u,S as d,i as p}from"./assets/vendor-D73Uttp0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",y="47047492-675b2ed8a2567f743231acd4f";async function f(s){try{return(await u.get(`${m}`,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}catch(r){console.log(r)}}function g(s){return s.map(({largeImageURL:r,webformatURL:a,tags:i,likes:e,views:t,comments:l,downloads:c})=>`
       <li class="gallery-list-item">
     <a class="gallery-list-item-link" href="${r}" >
      <img class="gallery-image" src="${a}" alt="${i}"/>
    </a>           
              <ul class="gallery-card-list">
              <li class="gallery-card-list-item">
                  <h3>Likes</h3>
                  <p>"${e}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Views</h3>
                  <p>"${t}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Comments</h3>
                  <p>"${l}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Downloads</h3>
                  <p>"${c}"</p>
              </li>
              </ul>
                  
  </li>
    `).join("")}const h=document.querySelector(".js-search-form"),o=document.querySelector(".js-gallery-list"),n=document.querySelector(".loader");document.querySelector(".search-input").addEventListener("click",s=>{s.target.value=""});h.addEventListener("submit",L);async function L(s){n.classList.add("is-open"),s.preventDefault();const r=s.target.elements.searchQuery.value.trim();if(r!=="")try{const a=await f(r);a.hits.length!==0?(o.innerHTML=g(a.hits),new d(".js-gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()):(o.innerHTML="",p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))}catch(a){console.log(a)}finally{n.classList.remove("is-open")}}
//# sourceMappingURL=index.js.map
