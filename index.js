import{a as p,S as L,i as v}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const b="https://pixabay.com/api/",S="47047492-675b2ed8a2567f743231acd4f";async function y(r,e){try{const{data:i}=await p.get(`${b}`,{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}});return i}catch(i){console.log(i)}}function m(r){return r.map(({largeImageURL:e,webformatURL:i,tags:l,likes:t,views:s,comments:a,downloads:g})=>`
       <li class="gallery-list-item">
     <a class="gallery-list-item-link" href="${e}" >
      <img class="gallery-image" src="${i}" alt="${l}"/>
    </a>           
              <ul class="gallery-card-list">
              <li class="gallery-card-list-item">
                  <h3>Likes</h3>
                  <p>"${t}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Views</h3>
                  <p>"${s}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Comments</h3>
                  <p>"${a}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Downloads</h3>
                  <p>"${g}"</p>
              </li>
              </ul>
                  
  </li>
    `).join("")}const w=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery-list"),u=document.querySelector(".loader"),n=document.querySelector(".js-load-more");document.querySelector(".search-input").addEventListener("click",r=>{r.target.value=""});w.addEventListener("submit",$);let o=1,c=null;async function $(r){if(r.preventDefault(),u.classList.add("is-hidden"),o=1,c=r.target.elements.searchQuery.value.trim(),c!=="")try{const e=await y(c,o);e.hits.length!==0?(d.innerHTML=m(e.hits),e.totalHits>15?n.classList.add("is-hidden"):n.classList.remove("is-hidden"),f()):(d.innerHTML="",h("Sorry, there are no images matching your search query. Please try again!","red"))}catch(e){console.log(e)}finally{u.classList.remove("is-hidden")}}n.addEventListener("click",q);async function q(r){o+=1,u.classList.add("is-hidden");try{const e=await y(c,o);e.hits.length!==0?(d.insertAdjacentHTML("beforeend",m(e.hits)),Math.ceil(e.totalHits/15)===o?(n.classList.remove("is-hidden"),h("We're sorry, but you've reached the end of search results.","blue")):n.classList.add("is-hidden"),f()):(d.innerHTML="",h());const i=document.querySelector(".gallery-list-item"),l=i.getBoundingClientRect().height;window.scrollBy({left:0,top:l*2,behavior:"smooth"})}catch(e){console.log(e)}finally{u.classList.remove("is-hidden")}}function f(){new L(".js-gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}function h(r,e){v.info({message:`${r}`,position:"topRight",color:`${e}`})}
//# sourceMappingURL=index.js.map
