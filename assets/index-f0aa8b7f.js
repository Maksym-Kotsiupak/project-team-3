(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),l=document.querySelectorAll(".js-link"),e=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),n.classList.toggle("is-open");const d=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[d](document.body)};o.addEventListener("click",e),r.addEventListener("click",e),document.documentElement.scrollWidth<=767&&l.forEach(function(t){t.addEventListener("click",e)}),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),openThirdModalBtn:document.querySelector("[data-modal-open-third]"),openFourModalBtn:document.querySelector("[data-modal-open-four]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};document.documentElement.scrollWidth<=767&&document.querySelector("[data-menu-modal-open]").addEventListener("click",o),n.openModalBtn.addEventListener("click",o),n.openThirdModalBtn.addEventListener("click",o),n.openFourModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden")}})();
