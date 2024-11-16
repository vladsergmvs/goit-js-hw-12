import{a as L,S as v,i as b}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const S="https://pixabay.com/api/",w="47047492-675b2ed8a2567f743231acd4f";async function h(r,e){try{const{data:i}=await L.get(`${S}`,{params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}});return i}catch(i){console.log(i)}}function m(r){return r.map(({largeImageURL:e,webformatURL:i,tags:a,likes:t,views:s,comments:l,downloads:p})=>`
       <li class="gallery-list-item">
     <a class="gallery-list-item-link" href="${e}" >
      <img class="gallery-image" src="${i}" alt="${a}"/>
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
                  <p>"${l}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Downloads</h3>
                  <p>"${p}"</p>
              </li>
              </ul>
                  
  </li>
    `).join("")}const y=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery-list"),o=document.querySelector(".loader"),c=document.querySelector(".js-load-more");document.querySelector(".search-input").addEventListener("click",r=>{r.target.value=""});y.addEventListener("submit",$);let n=1,d=null;async function $(r){if(r.preventDefault(),o.classList.add("is-hidden"),n=1,d=r.target.elements.searchQuery.value.trim(),d===""){o.classList.remove("is-hidden");return}try{const e=await h(d,n);e.hits.length!==0?(u.innerHTML=m(e.hits),e.totalHits>15?c.classList.add("is-hidden"):c.classList.remove("is-hidden"),f()):(u.innerHTML="",g("Sorry, there are no images matching your search query. Please try again!","red"))}catch(e){console.log(e)}finally{o.classList.remove("is-hidden")}y.re}c.addEventListener("click",q);async function q(r){n+=1,o.classList.add("is-hidden");try{const e=await h(d,n);u.insertAdjacentHTML("beforeend",m(e.hits)),Math.ceil(e.totalHits/15)===n?(c.classList.remove("is-hidden"),g("We're sorry, but you've reached the end of search results.","blue")):c.classList.add("is-hidden"),f();const a=document.querySelector(".gallery-list-item"),t=a.getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"})}catch(e){console.log(e)}finally{o.classList.remove("is-hidden")}}function f(){new v(".js-gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}function g(r,e){b.info({message:`${r}`,position:"topRight",color:`${e}`})}
//# sourceMappingURL=index.js.map
