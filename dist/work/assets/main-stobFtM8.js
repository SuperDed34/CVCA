var c=Object.defineProperty;var d=(o,r,n)=>r in o?c(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n;var s=(o,r,n)=>(d(o,typeof r!="symbol"?r+"":r,n),n);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();class l{constructor(){s(this,"body",document.querySelector("body"));s(this,"burger",document.querySelector(".burger-box"));s(this,"menu",document.querySelector(".menu"));s(this,"hiddenBurger",document.querySelector(".burger-nav"));s(this,"hiddenBurgerContainer",document.querySelector(".burger-nav-menu"));s(this,"header",document.querySelector(".header"))}changeButton(){this.burger.classList.toggle("rotate"),this.burger.classList.contains("rotate")?(this.hiddenBurgerContainer.appendChild(this.menu),this.hiddenBurger.classList.add("show"),this.body.style.overflow="hidden"):(setTimeout(()=>this.header.appendChild(this.menu),1e3),this.hiddenBurger.classList.remove("show"),this.body.style.overflow="auto")}}const a=new l;document.querySelector(".burger-button").addEventListener("click",o=>{o.preventDefault(),a.changeButton()});
