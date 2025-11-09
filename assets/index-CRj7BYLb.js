(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const n=[{title:"Proyecto Artesan Café",image:"src/assets/ArtesanCafe.png"},{title:"Proyecto Novelia Editorial",image:"src/assets/NoveliaEditorial.png"}],l=document.getElementById("proyectos");n.forEach(r=>{l.innerHTML+=`
  <a class="project" href="${r.url}">
    <div class="project__image">
      <img src="${r.image}" alt="${r.title}">
    </div>
    <div class="project__title">${r.title}</div>
  </a>
  `});
