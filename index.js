import{a as g,S as L,i as v}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const b="https://pixabay.com/api/",S="47047492-675b2ed8a2567f743231acd4f";async function y(s,e){try{return(await g.get(`${b}`,{params:{key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}})).data}catch(i){console.log(i)}}function f(s){return s.map(({largeImageURL:e,webformatURL:i,tags:n,likes:t,views:r,comments:a,downloads:p})=>`
       <li class="gallery-list-item">
     <a class="gallery-list-item-link" href="${e}" >
      <img class="gallery-image" src="${i}" alt="${n}"/>
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
                  <p>"${a}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Downloads</h3>
                  <p>"${p}"</p>
              </li>
              </ul>
                  
  </li>
    `).join("")}const $=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery-list"),u=document.querySelector(".loader"),o=document.querySelector(".js-load-more");document.querySelector(".search-input").addEventListener("click",s=>{s.target.value=""});$.addEventListener("submit",M);let l=1,c=null;async function M(s){if(s.preventDefault(),u.classList.add("is-hidden"),l=1,c=s.target.elements.searchQuery.value.trim(),c!=="")try{const e=await y(c,l);e.hits.length!==0?(d.innerHTML=f(e.hits),e.totalHits>15?o.classList.add("is-hidden"):o.classList.remove("is-hidden"),m()):(d.innerHTML="",h("Sorry, there are no images matching your search query. Please try again!","red"))}catch(e){console.log(e)}finally{u.classList.remove("is-hidden")}}o.addEventListener("click",q);async function q(s){l+=1,u.classList.add("is-hidden");try{const e=await y(c,l);e.hits.length!==0?(d.insertAdjacentHTML("beforeend",f(e.hits)),Math.ceil(e.totalHits/15)===l?(o.classList.remove("is-hidden"),h("We're sorry, but you've reached the end of search results.","blue")):o.classList.add("is-hidden"),m()):(d.innerHTML="",h())}catch(e){console.log(e)}finally{u.classList.remove("is-hidden")}}function m(){new L(".js-gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}function h(s,e){v.info({message:`${s}`,position:"topRight",color:`${e}`})}
//# sourceMappingURL=index.js.map
