import{a as L,S as v,i as b}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const S="https://pixabay.com/api/",w="47047492-675b2ed8a2567f743231acd4f";async function h(s,e){try{const{data:i}=await L.get(`${S}`,{params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}});return i}catch(i){console.log(i)}}function m(s){return s.map(({largeImageURL:e,webformatURL:i,tags:a,likes:t,views:r,comments:o,downloads:p})=>`
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
                  <p>"${r}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Comments</h3>
                  <p>"${o}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Downloads</h3>
                  <p>"${p}"</p>
              </li>
              </ul>
                  
  </li>
    `).join("")}const y=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery-list"),n=document.querySelector(".loader"),l=document.querySelector(".js-load-more");document.querySelector(".search-input").addEventListener("click",s=>{s.target.value=""});y.addEventListener("submit",$);let c=1,d=null;async function $(s){if(s.preventDefault(),n.classList.add("is-hidden"),c=1,d=s.target.elements.searchQuery.value.trim(),d===""){n.classList.remove("is-hidden");return}try{const e=await h(d,c);e.hits.length!==0?(u.innerHTML=m(e.hits),e.totalHits>15?l.classList.add("is-hidden"):l.classList.remove("is-hidden"),f()):(u.innerHTML="",l.classList.remove("is-hidden"),g("Sorry, there are no images matching your search query. Please try again!","red"))}catch(e){console.log(e)}finally{n.classList.remove("is-hidden")}y.re}l.addEventListener("click",q);async function q(s){c+=1,n.classList.add("is-hidden");try{const e=await h(d,c);u.insertAdjacentHTML("beforeend",m(e.hits)),Math.ceil(e.totalHits/15)===c?(l.classList.remove("is-hidden"),g("We're sorry, but you've reached the end of search results.","blue")):l.classList.add("is-hidden"),f();const a=document.querySelector(".gallery-list-item"),t=a.getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"})}catch(e){console.log(e)}finally{n.classList.remove("is-hidden")}}function f(){new v(".js-gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}function g(s,e){b.info({message:`${s}`,position:"topRight",color:`${e}`})}
//# sourceMappingURL=index.js.map
