function t(t,e,a,r){Object.defineProperty(t,e,{get:a,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=a.parcelRequire3cc6;null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var a={id:t,exports:{}};return r[t]=a,e.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},a.parcelRequire3cc6=s),s.register("31gE9",(function(e,a){var r,i;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var s={};r=function(t){for(var e=Object.keys(t),a=0;a<e.length;a++)s[e[a]]=t[e[a]]},i=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s("31gE9").register(JSON.parse('{"031mc":"index.e6ecfa11.js","fYi3G":"001.ea29acdd.png","4S7hV":"002.fac6db3a.png","3jjLM":"003.fa4d0582.png","el3db":"004.b9726398.png","j3EnC":"005.b36a17ca.png","4uYvr":"006.0ea198df.png","5MOqV":"007.2301f715.png","1AIE4":"008.4248ab18.png","30Aep":"009.80e885cd.png","jo53S":"010.fe641d33.png","1fcrD":"011.bdea571c.png","awpVn":"012.67bcb4b9.png","d9nPQ":"013.63a5b289.png","hPvMZ":"014.593fab6e.png","je2Jz":"015.d510c364.png","cPKUn":"016.28b2a038.png","enZQG":"017.40ff16c8.png","gScVe":"018.b8173b05.png","9PPhU":"019.ccdf5b73.png","2CErw":"020.5c546ceb.png"}')),s.register("c6uJS",(function(e,a){t(e.exports,"default",(function(){return h}));const r=document.querySelector(".navbar"),i=document.querySelector(".navmob"),s=document.querySelector(".navbar__bag"),n=document.querySelector(".bag"),l=document.querySelector(".bag .btn-close"),o=document.querySelector(".navbar__favs"),d=document.querySelector(".fav"),c=document.querySelector(".fav .btn-close"),m=document.querySelector(".navbar__burger"),g=document.querySelector(".modal-bg");class h{static openBagFav(t,e){t.classList.contains(e)||t.classList.add(e),g.classList.contains("modal-bg--open")||g.classList.add("modal-bg--open")}static closeBagFav(t,e){t.classList.contains(e)&&t.classList.remove(e),g.classList.contains("modal-bg--open")&&g.classList.remove("modal-bg--open")}static displayNoneTitleNoItems(t){document.querySelector(t).style.display="none"}static displayBlockTitleNoItems(t){document.querySelector(t).style.display="flex"}static disableBtn(t){document.querySelector(t).disabled=!0}static enableBtn(t){document.querySelector(t).disabled=!1}static setStyle({_footerEl:t,_noItemsTitleEl:e,_displayFooter:a,_displayNoItemsTitle:r}){t.style.display=a,e.style.display=r}static setBagFavStyleEmpty(t,e){this.setStyle({_footerEl:t,_noItemsTitleEl:e,_displayFooter:"none",_displayNoItemsTitle:"block"})}static setBagFavStyleFilled(t,e){this.setStyle({_footerEl:t,_noItemsTitleEl:e,_displayFooter:"grid",_displayNoItemsTitle:"none"})}addClickListenersToNavbarIcons(t,e,a,r){t.addEventListener("click",(()=>{h.openBagFav(a,r)})),e.addEventListener("click",(()=>{h.closeBagFav(a,r)}))}addListenerToBurger(){m.addEventListener("click",(()=>{m.classList.contains("burger--opened")?(m.classList.remove("burger--opened"),i.classList.remove("navmob--opened"),r.classList.remove("navbar--transparent")):(m.classList.add("burger--opened"),i.classList.add("navmob--opened"),r.classList.add("navbar--transparent"))}))}addListenersToModalBg(){g.addEventListener("click",(()=>{h.closeBagFav(n,"bag--open"),h.closeBagFav(d,"fav--open")})),window.addEventListener("keyup",(t=>{t.preventDefault(),("Escape"===t.key||27===t.key||g.classList.contains("modal-bg--open"))&&(h.closeBagFav(n,"bag--open"),h.closeBagFav(d,"fav--open"))}))}resizeNavbarOnScroll(){window.addEventListener("scroll",(()=>{window.pageYOffset>30&&!i.classList.contains("navmob--opened")?r.classList.add("navbar--scrolled"):r.classList.remove("navbar--scrolled")}))}SETUP_UI(){this.resizeNavbarOnScroll(),this.addClickListenersToNavbarIcons(s,l,n,"bag--open"),this.addClickListenersToNavbarIcons(o,c,d,"fav--open"),this.addListenerToBurger(),this.addListenersToModalBg()}}})),s.register("bLOrV",(function(e,a){t(e.exports,"default",(function(){return r}));class r{static saveProducts(t){localStorage.setItem("all_products",JSON.stringify(t))}static getProduct(t){return JSON.parse(localStorage.getItem("all_products")).find((e=>e.id==t))}static getAllProducts(){return JSON.parse(localStorage.getItem("all_products"))||[]}static saveBag(t){localStorage.setItem("arrBag",JSON.stringify(t))}static saveFav(t){localStorage.setItem("arrFav",JSON.stringify(t))}static getBag(){return localStorage.getItem("arrBag")?JSON.parse(localStorage.getItem("arrBag")):[]}static getFav(){return localStorage.getItem("arrFav")?JSON.parse(localStorage.getItem("arrFav")):[]}}})),s.register("eShdp",(function(e,a){t(e.exports,"default",(function(){return r}));class r{async fetchProducts(){try{let t={method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","secret-key":"$2b$10$sFQFGLJgCbv4X/XwgaiL2eBw5qcN4q3CvBp8f57mdLyzZnQpSBkaW"}},e="https://api.jsonbin.io/b/610bf0cdd5667e403a39cbc6",a=await fetch(e,t);return await a.json()}catch(t){console.error(t)}}}})),s.register("gMyuQ",(function(e,a){t(e.exports,"default",(function(){return v}));var r=s("bLOrV"),i=s("c6uJS"),n=s("2NEYp"),l=s("lxjv8");const o=document.querySelector(".navbar__bag-counter"),d=document.querySelector(".bag"),c=document.querySelector(".bag .btn-clearbag"),m=document.querySelector(".bag .total-price-items"),g=document.querySelector(".bag .items"),h=new l.default;let u=[];class v{get arrBag(){return this._arrBag}set arrBag(t){this._arrBag=t}getAddToBagBtns(){let t;"/index.html"==window.location.pathname||"/"==window.location.pathname?t=[...document.querySelectorAll(".add-to-bag")]:"/allwatches.html"==window.location.pathname&&(t=[...document.querySelectorAll(".btn-addtobag")]),u=t,t.forEach((t=>{let e=t.dataset.id,a=this.arrBag.find((t=>t.id==e));!a||"/"!=window.location.pathname&&"/index.html"!=window.location.pathname?a&&"/allwatches.html"==window.location.pathname&&(t.closest(".card").classList.add("card--added"),t.disabled=!0):(t.classList.add("btn--added"),t.innerHTML="ADDED &nbsp;&#10003;",t.disabled=!0),t.addEventListener("click",(t=>{"/"==window.location.pathname||"/index.html"==window.location.pathname?(t.target.classList.add("btn--added"),t.target.innerHTML="ADDED &nbsp;&#10003;"):"/allwatches.html"==window.location.pathname&&t.target.closest(".card").classList.add("card--added"),t.target.disabled=!0;let a={...r.default.getProduct(e),amount:1};this.arrBag=[...this.arrBag,a],r.default.saveBag(this.arrBag),this.setBagValues(this.arrBag),this.addToBag(a),h.addNotification({display:!0,text:`${a.title} has been added to Bag!`}),i.default.openBagFav(d,"bag--open")}))}))}setBagValues(t){let e=0,a=0;t.map((t=>{e+=t.price*t.amount,a+=t.amount})),m.innerText=`$ ${parseFloat(e.toFixed(2))}`,o.innerText=a}addToBag(t){let e=n.default.arrObjImgs;const a=document.createElement("article");a.classList.add("item"),a.innerHTML=`\n\t\t\t<figure class="item__figure">\n\t\t\t\t<img class="item__img" src=${e[t.id-1]} alt="watch-brown-white-${t.title}" />\n\t\t\t</figure>\n\n\t\t\t<div class="item__informations">\n\t\t\t\t<h3 class="item__title">${t.title}</h3>\n\t\t\t\t<h4 class="item__subtitle">${t.brand}</h4>\n\t\t\t\t<p class="item__price">$ ${t.price}</p>\n\t\t\t</div>\n\n\t\t\t<div class="item__controller">\n\t\t\t\t<div class="item__add" data-id=${t.id}>+</div>\n\t\t\t\t<div class="item__amount">${t.amount}</div>\n\t\t\t\t<div class="item__remove" data-id=${t.id}>-</div>\n\t\t\t</div>\n\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="item__icon item__icon--delete" data-id=${t.id} width="17.499" height="20.783" viewBox="0 0 17.499 20.783">\n\t\t\t\t<path d="M-6386.754-2279.46a4.252,4.252,0,0,1,0-6.011,4.254,4.254,0,0,1,6.009,0,4.257,4.257,0,0,1,0,6.012,4.234,4.234,0,0,1-3,1.242A4.238,4.238,0,0,1-6386.754-2279.46Zm3.991-1.466a.315.315,0,0,0,.446,0,.318.318,0,0,0,0-.448l-1.092-1.092,1.09-1.09a.318.318,0,0,0,0-.448.32.32,0,0,0-.448,0l-1.09,1.09-1.09-1.09a.318.318,0,0,0-.448,0,.317.317,0,0,0,0,.448l1.09,1.092-1.09,1.088a.318.318,0,0,0,0,.448.317.317,0,0,0,.448,0l1.09-1.09Zm-4.863,1.21h-6.16a2.145,2.145,0,0,1-2.142-2.142v-12.858h12.856v7.549a4.776,4.776,0,0,0-.679-.048,4.755,4.755,0,0,0-4.749,4.75,4.723,4.723,0,0,0,.875,2.747v0Zm-9.374-16.07v-2.143h3.75l1.071-1.071h5.357l1.072,1.071H-6382v2.143Z" transform="translate(6397 2299)"/>\n\t\t\t</svg>\n\t\t`,g.appendChild(a),i.default.displayNoneTitleNoItems(".bag--if-no-items"),i.default.enableBtn(".btn-checkout"),i.default.enableBtn(".btn-clearbag")}populateBag(t){t.forEach((t=>this.addToBag(t)))}bagLogic(){c.addEventListener("click",(()=>{this.clearBag()})),g.addEventListener("click",(t=>{if(t.target.closest(".item__icon--delete")){let e=t.target,a=e.dataset.id,r=this.arrBag.find((t=>t.id==a));e.parentElement.classList.add("item--deleted"),h.addNotification({text:`${r.title} has been removed from Bag!`,alertClass:"alert__item--removed"}),setTimeout((()=>{this.deleteFromBag(a),g.removeChild(e.parentElement),e.parentElement.classList.remove("item--deleted")}),400)}else if(t.target.matches(".item__add")){let e=t.target,a=e.dataset.id,i=this.arrBag.find((t=>t.id==a));console.table(this.arrBag),i.amount=i.amount+1,r.default.saveBag(this.arrBag),this.setBagValues(this.arrBag),e.nextElementSibling.innerText=i.amount;//! []
}else if(t.target.matches(".item__remove")){let e=t.target,a=e.dataset.id,i=this.arrBag.find((t=>t.id==a));i.amount=i.amount-1,i.amount>0?(r.default.saveBag(this.arrBag),this.setBagValues(this.arrBag),e.previousElementSibling.innerText=i.amount):(e.parentElement.parentElement.classList.add("item--deleted"),h.addNotification({text:"Watch has been removed from the Bag!",alertClass:"alert__item--removed"}),setTimeout((()=>{g.removeChild(e.parentElement.parentElement),this.deleteFromBag(a),e.parentElement.parentElement.classList.remove("item--deleted")}),400))}}))}clearBag(){for(this.arrBag.map((t=>t.id)).forEach((t=>this.deleteFromBag(t)));g.children.length>0;)g.removeChild(g.children[0]);h.addNotification({text:"Your Bag is empty!",alertClass:"alert__item--remove"}),i.default.displayBlockTitleNoItems(".bag--if-no-items"),i.default.disableBtn(".btn-checkout"),i.default.disableBtn(".btn-clearbag"),i.default.closeBagFav(d,"bag--open")}deleteFromBag(t){this.arrBag=this.arrBag.filter((e=>e.id!=t)),this.setBagValues(this.arrBag),r.default.saveBag(this.arrBag);let e=this.getSingleATBbtn(t);e.disabled=!1,"/"==window.location.pathname||"/index.html"==window.location.pathname?(e.classList.remove("btn--added"),"feature__footer"==e.parentElement.className?e.innerText="add to bag":e.innerHTML='\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="21.786" viewBox="0 0 16.5 21.786">\n\t\t\t\t\t\t<path d="M-6389-2281.464a4.254,4.254,0,0,1,4.25-4.25,4.255,4.255,0,0,1,4.251,4.25,4.256,4.256,0,0,1-4.251,4.25A4.256,4.256,0,0,1-6389-2281.464Zm2,.075a.318.318,0,0,0,.318.316h1.541v1.541a.318.318,0,0,0,.316.316.317.317,0,0,0,.316-.316v-1.541h1.544a.317.317,0,0,0,.314-.316.317.317,0,0,0-.314-.318h-1.544v-1.541a.316.316,0,0,0-.316-.316.317.317,0,0,0-.316.316v1.541h-1.541A.318.318,0,0,0-6387-2281.389Zm-1.726,2.848h0Zm-5.839,0a2.382,2.382,0,0,1-1.8-.833,2.633,2.633,0,0,1-.628-1.957l1.036-11.973a.617.617,0,0,1,.607-.581h1.825v-1.278a3.753,3.753,0,0,1,3.651-3.837,3.588,3.588,0,0,1,2.584,1.122,3.914,3.914,0,0,1,1.066,2.715v1.278h1.827a.616.616,0,0,1,.605.581l.631,7.273a5.007,5.007,0,0,0-1.342-.183,5.006,5.006,0,0,0-5,5,5,5,0,0,0,.774,2.675Zm2.26-16.623v1.278h4.87v-1.278a2.609,2.609,0,0,0-.711-1.811,2.39,2.39,0,0,0-1.724-.747A2.5,2.5,0,0,0-6392.305-2295.164Z" transform="translate(6397 2299.001)"/>\n\t\t\t\t\t</svg>\n\t\t\t\t\tadd to bag\n\t\t\t\t'):"/allwatches.html"==window.location.pathname&&e.closest(".card").classList.remove("card--added")}getSingleATBbtn(t){return u.find((e=>e.dataset.id==t))}SETUP_BAG(){this.arrBag=r.default.getBag(),this.setBagValues(this.arrBag),this.populateBag(this.arrBag)}constructor(){this._arrBag=[]}}})),s.register("2NEYp",(function(a,r){t(a.exports,"default",(function(){return b}));var i=s("2VOb5"),n=s("3KyWG"),l=s("bLOrV");const o=document.querySelectorAll(".filter--women"),d=document.querySelectorAll(".filter--men"),c=document.querySelectorAll(".filter--all"),m=document.querySelector(".allwatches__cards"),g=document.querySelector(".allwatches__cards-section .title"),h=document.querySelectorAll(".price-sorting"),u=document.querySelector(".filtermobile--women"),v=document.querySelector(".filtermobile--men"),f=document.querySelector(".filtermobile--all"),p=document.querySelector("#filtermobile__chb");class b{static get arrObjImgs(){return Object.values(e(n))}displayProducts(t){let e="",a=this.constructor.arrObjImgs;t.forEach((t=>{e+=`\n\t\t\t\t<article class="card" data-gender=${t.gender} data-id=${t.id}>\n\t\t\t\t\t<figure class="card__figure">\n\t\t\t\t\t\t<img src=${a[t.id-1]} alt="hand-watch-with-title-${t.title}" class="card__img" />\n\t\t\t\t\t</figure>\n\t\t\t\t\t\n\t\t\t\t\t<div class="card__informations">\n\t\t\t\t\t\t<h3 class="card__title">${t.title}</h3>\n\t\t\t\t\t\t<h4 class="card__subtitle">${t.brand}</h4>\n\t\t\t\t\t\t<p class="card__price" data-price=${t.price}>$ ${t.price}</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button class="btn-addtobag" data-id=${t.id}>\n\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="21.786" viewBox="0 0 16.5 21.786"><path d="M-6389-2281.464a4.254,4.254,0,0,1,4.25-4.25,4.255,4.255,0,0,1,4.251,4.25,4.256,4.256,0,0,1-4.251,4.25A4.256,4.256,0,0,1-6389-2281.464Zm2,.075a.318.318,0,0,0,.318.316h1.541v1.541a.318.318,0,0,0,.316.316.317.317,0,0,0,.316-.316v-1.541h1.544a.317.317,0,0,0,.314-.316.317.317,0,0,0-.314-.318h-1.544v-1.541a.316.316,0,0,0-.316-.316.317.317,0,0,0-.316.316v1.541h-1.541A.318.318,0,0,0-6387-2281.389Zm-1.726,2.848h0Zm-5.839,0a2.382,2.382,0,0,1-1.8-.833,2.633,2.633,0,0,1-.628-1.957l1.036-11.973a.617.617,0,0,1,.607-.581h1.825v-1.278a3.753,3.753,0,0,1,3.651-3.837,3.588,3.588,0,0,1,2.584,1.122,3.914,3.914,0,0,1,1.066,2.715v1.278h1.827a.616.616,0,0,1,.605.581l.631,7.273a5.007,5.007,0,0,0-1.342-.183,5.006,5.006,0,0,0-5,5,5,5,0,0,0,.774,2.675Zm2.26-16.623v1.278h4.87v-1.278a2.609,2.609,0,0,0-.711-1.811,2.39,2.39,0,0,0-1.724-.747A2.5,2.5,0,0,0-6392.305-2295.164Z" transform="translate(6397 2299.001)"/></svg>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" data-id=${t.id} class="card__fav card-fav-btn" width="43.938" height="39.367" viewBox="0 0 43.938 39.367">\n\t\t\t\t\t\t<path d="M38.151,3.608A11.143,11.143,0,0,0,29.863,0a10.425,10.425,0,0,0-6.511,2.247A13.321,13.321,0,0,0,20.72,5a13.314,13.314,0,0,0-2.633-2.749A10.423,10.423,0,0,0,11.576,0,11.143,11.143,0,0,0,3.287,3.608,12.953,12.953,0,0,0,0,12.453c0,3.5,1.306,6.712,4.11,10.1,2.508,3.026,6.113,6.1,10.288,9.656,1.426,1.215,3.041,2.592,4.719,4.059a2.433,2.433,0,0,0,3.2,0C24,34.8,25.615,33.42,27.042,32.2c4.174-3.557,7.779-6.629,10.287-9.656,2.8-3.383,4.11-6.591,4.11-10.1a12.951,12.951,0,0,0-3.287-8.845Zm0,0" transform="translate(1.25 1.25)"/>\n\t\t\t\t\t</svg>\n\t\t\t\t</article>\n\t\t\t`})),m.innerHTML=e,this.$cards=document.querySelectorAll(".allwatches__cards-section .card"),this.makeDOMarrays([...this.$cards])}makeDOMarrays(t){let e=document.querySelectorAll('[data-gender="unisex"]');this.$arrWomen=[...document.querySelectorAll('[data-gender="female"]'),...e],this.$arrMen=[...document.querySelectorAll('[data-gender="male"]'),...e],this.$arrAllWatches=this.$cards}filtering(t,e,a){t.forEach((t=>{t.addEventListener("click",(()=>{this.appendingChild(e),this.changeTitle(a)}))}))}filteringMobile(t,e,a){t.addEventListener("click",(()=>{this.appendingChild(e),this.changeTitle(a),this.closeFiltermobileChb(!1)}))}changeTitle(t){g&&(g.innerText=t,g.classList.contains("title--anim")?g.classList.remove("title--anim"):g.classList.add("title--anim"))}priceSort(){h.forEach((t=>{t.addEventListener("change",(t=>{1==t.srcElement.selectedIndex?(this.priceToHigh(),this.closeFiltermobileChb(!1)):2==t.srcElement.selectedIndex&&(this.priceToLow(),this.closeFiltermobileChb(!1))}))}))}priceToHigh(){let t=[...document.querySelectorAll(".card")];t.sort(((t,e)=>(t=parseFloat(t.querySelector(".card__price").dataset.price))>(e=parseFloat(e.querySelector(".card__price").dataset.price))?-1:t<e?1:0)),this.appendingChild(t)}priceToLow(){let t=[...document.querySelectorAll(".card")];t.sort(((t,e)=>(t=parseFloat(t.querySelector(".card__price").dataset.price))>(e=parseFloat(e.querySelector(".card__price").dataset.price))?1:t<e?-1:0)),this.appendingChild(t)}appendingChild(t,e){const a=document.querySelector(".allwatches__cards");a.innerHTML="",t.forEach((t=>{a.insertAdjacentElement("afterbegin",t)}))}closeFiltermobileChb(t){p.checked=t}setup_filter(){this.filtering(o,this.$arrWomen,"for her"),this.filtering(d,this.$arrMen,"for him"),this.filtering(c,this.$arrAllWatches,"all watches"),this.filteringMobile(u,this.$arrWomen,"for her"),this.filteringMobile(v,this.$arrMen,"for him"),this.filteringMobile(f,this.$arrAllWatches,"all watches"),this.priceSort(),this.closeFiltermobileChb()}constructor(){i.default(this,"arrBag",l.default.getBag()),i.default(this,"$cards",void 0),i.default(this,"$arrWomen",void 0),i.default(this,"$arrMen",void 0),i.default(this,"$arrAllWatch",void 0)}}})),s.register("2VOb5",(function(e,a){function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}t(e.exports,"default",(function(){return r}))})),s.register("3KyWG",(function(t,e){var a=s("eitQQ"),r=s("byJRU"),i=s("4Q65D"),n=s("f5CzK"),l=s("927zG"),o=s("7Xh3e"),d=s("jTsHp"),c=s("bI8HN"),m=s("lgmpO"),g=s("5veBp"),h=s("69yjt"),u=s("kgiZW"),v=s("7p2Bu"),f=s("fj9H4"),p=s("jKt1g"),b=s("3MJwE"),_=s("aqIms"),w=s("hHJDN"),B=s("eoRbU"),S=s("hP15v");t.exports={"001":a,"002":r,"003":i,"004":n,"005":l,"006":o,"007":d,"008":c,"009":m,"010":g,"011":h,"012":u,"013":v,"014":f,"015":p,"016":b,"017":_,"018":w,"019":B,"020":S}})),s.register("eitQQ",(function(t,e){t.exports=new URL(s("31gE9").resolve("fYi3G"),import.meta.url).toString()})),s.register("byJRU",(function(t,e){t.exports=new URL(s("31gE9").resolve("4S7hV"),import.meta.url).toString()})),s.register("4Q65D",(function(t,e){t.exports=new URL(s("31gE9").resolve("3jjLM"),import.meta.url).toString()})),s.register("f5CzK",(function(t,e){t.exports=new URL(s("31gE9").resolve("el3db"),import.meta.url).toString()})),s.register("927zG",(function(t,e){t.exports=new URL(s("31gE9").resolve("j3EnC"),import.meta.url).toString()})),s.register("7Xh3e",(function(t,e){t.exports=new URL(s("31gE9").resolve("4uYvr"),import.meta.url).toString()})),s.register("jTsHp",(function(t,e){t.exports=new URL(s("31gE9").resolve("5MOqV"),import.meta.url).toString()})),s.register("bI8HN",(function(t,e){t.exports=new URL(s("31gE9").resolve("1AIE4"),import.meta.url).toString()})),s.register("lgmpO",(function(t,e){t.exports=new URL(s("31gE9").resolve("30Aep"),import.meta.url).toString()})),s.register("5veBp",(function(t,e){t.exports=new URL(s("31gE9").resolve("jo53S"),import.meta.url).toString()})),s.register("69yjt",(function(t,e){t.exports=new URL(s("31gE9").resolve("1fcrD"),import.meta.url).toString()})),s.register("kgiZW",(function(t,e){t.exports=new URL(s("31gE9").resolve("awpVn"),import.meta.url).toString()})),s.register("7p2Bu",(function(t,e){t.exports=new URL(s("31gE9").resolve("d9nPQ"),import.meta.url).toString()})),s.register("fj9H4",(function(t,e){t.exports=new URL(s("31gE9").resolve("hPvMZ"),import.meta.url).toString()})),s.register("jKt1g",(function(t,e){t.exports=new URL(s("31gE9").resolve("je2Jz"),import.meta.url).toString()})),s.register("3MJwE",(function(t,e){t.exports=new URL(s("31gE9").resolve("cPKUn"),import.meta.url).toString()})),s.register("aqIms",(function(t,e){t.exports=new URL(s("31gE9").resolve("enZQG"),import.meta.url).toString()})),s.register("hHJDN",(function(t,e){t.exports=new URL(s("31gE9").resolve("gScVe"),import.meta.url).toString()})),s.register("eoRbU",(function(t,e){t.exports=new URL(s("31gE9").resolve("9PPhU"),import.meta.url).toString()})),s.register("hP15v",(function(t,e){t.exports=new URL(s("31gE9").resolve("2CErw"),import.meta.url).toString()})),s.register("lxjv8",(function(e,a){t(e.exports,"default",(function(){return i}));var r=s("2VOb5");class i{addNotification({text:t,alertClass:e}){let a=document.createElement("article");a.className=`alert__item ${e}`,a.innerHTML=`\n\t\t\t<span class="alert__icon">&#8505;</span>\n\t\t\t<p class="alert__text">${t}</p>\n\t\t\t<span class="alert__icon--close">&#10005;</span>\n\t\t`,this.$alertParent.appendChild(a),setTimeout((()=>{a.style.display="none"}),3e3)}hideMoreThanFewAlerts(){[...document.querySelectorAll(".alert")].length>4&&console.log("HIDE SOME")}constructor(){r.default(this,"$alertParent",document.querySelector(".alert")),r.default(this,"notification",{})}}})),s.register("b0JUj",(function(e,a){t(e.exports,"default",(function(){return f}));var r=s("cdf2t"),i=s("bLOrV"),n=s("c6uJS"),l=s("2NEYp"),o=s("lxjv8");const d=document.querySelector(".navbar__favs-counter"),c=document.querySelector(".fav"),m=(document.querySelector(".fav__footer"),document.querySelector(".fav--if-no-items"),document.querySelector(".fav .btn-clearfav")),g=document.querySelector(".fav .total-price-items"),h=document.querySelector(".fav .items"),u=new o.default;let v=[];class f extends r.default{get arrBag(){return this._arrBag}set arrBag(t){this._arrBag=t}get arrFav(){return this._arrFav}set arrFav(t){this._arrFav=t}getFavBtns(){const t=[...document.querySelectorAll(".card-fav-btn")];v=t,v.forEach((t=>{let e=t.dataset.id;this.arrFav.find((t=>t.id==e))&&t.classList.add("card-fav-btn--liked"),t.addEventListener("click",(()=>{if(t.classList.contains("card-fav-btn--liked"))t.classList.remove("card-fav-btn--liked"),this.deleteFromFavourites(e),document.querySelectorAll(".fav .item").forEach((t=>{t.dataset.id==e&&h.removeChild(t)})),this.setFavValues(this.arrFav),u.addNotification({text:"Watch has been removed from Favourites!",alertClass:"alert__item--removed"});else{t.classList.add("card-fav-btn--liked");let a={...i.default.getProduct(e),amount:1};this.arrFav=[...this.arrFav,a],i.default.saveFav(this.arrFav),this.setFavValues(this.arrFav),this.addToFavourites(a),u.addNotification({text:`${a.title} has been added to Favourites!`,alertClass:"alert__item--added"})}}))}))}getSingleFavBtn(t){return v.find((e=>e.dataset.id==t))}setFavValues(t){let e=0;e=t.length,g.innerText=e,d.innerText=e}addToFavourites(t){let e=l.default.arrObjImgs;const a=document.createElement("article");a.classList.add("item"),a.setAttribute("data-id",`${t.id}`),a.innerHTML=`\n\t\t\t<figure class="item__figure">\n\t\t\t\t<img class="item__img" src=${e[t.id-1]} alt="watch-brown-white-${t.title}" />\n\t\t\t</figure>\n\n\t\t\t<div class="item__informations">\n\t\t\t\t<h3 class="item__title">${t.title}</h3>\n\t\t\t\t<h4 class="item__subtitle">${t.brand}</h4>\n\t\t\t\t<p class="item__price">$ ${t.price}</p>\n\t\t\t</div>\n\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" data-id=${t.id} class="item__icon item__icon--add-to-bag" width="16.5" height="21.786" viewBox="0 0 16.5 21.786">\n\t\t\t\t<path d="M-6389-2281.464a4.254,4.254,0,0,1,4.25-4.25,4.255,4.255,0,0,1,4.251,4.25,4.256,4.256,0,0,1-4.251,4.25A4.256,4.256,0,0,1-6389-2281.464Zm2,.075a.318.318,0,0,0,.318.316h1.541v1.541a.318.318,0,0,0,.316.316.317.317,0,0,0,.316-.316v-1.541h1.544a.317.317,0,0,0,.314-.316.317.317,0,0,0-.314-.318h-1.544v-1.541a.316.316,0,0,0-.316-.316.317.317,0,0,0-.316.316v1.541h-1.541A.318.318,0,0,0-6387-2281.389Zm-1.726,2.848h0Zm-5.839,0a2.382,2.382,0,0,1-1.8-.833,2.633,2.633,0,0,1-.628-1.957l1.036-11.973a.617.617,0,0,1,.607-.581h1.825v-1.278a3.753,3.753,0,0,1,3.651-3.837,3.588,3.588,0,0,1,2.584,1.122,3.914,3.914,0,0,1,1.066,2.715v1.278h1.827a.616.616,0,0,1,.605.581l.631,7.273a5.007,5.007,0,0,0-1.342-.183,5.006,5.006,0,0,0-5,5,5,5,0,0,0,.774,2.675Zm2.26-16.623v1.278h4.87v-1.278a2.609,2.609,0,0,0-.711-1.811,2.39,2.39,0,0,0-1.724-.747A2.5,2.5,0,0,0-6392.305-2295.164Z" transform="translate(6397 2299.001)"/>\n\t\t\t</svg>\n\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" data-id=${t.id} class="item__icon item__icon--remove-from-fav" width="17.499" height="20.783" viewBox="0 0 17.499 20.783">\n\t\t\t\t<path d="M-6386.754-2279.46a4.252,4.252,0,0,1,0-6.011,4.254,4.254,0,0,1,6.009,0,4.257,4.257,0,0,1,0,6.012,4.234,4.234,0,0,1-3,1.242A4.238,4.238,0,0,1-6386.754-2279.46Zm3.991-1.466a.315.315,0,0,0,.446,0,.318.318,0,0,0,0-.448l-1.092-1.092,1.09-1.09a.318.318,0,0,0,0-.448.32.32,0,0,0-.448,0l-1.09,1.09-1.09-1.09a.318.318,0,0,0-.448,0,.317.317,0,0,0,0,.448l1.09,1.092-1.09,1.088a.318.318,0,0,0,0,.448.317.317,0,0,0,.448,0l1.09-1.09Zm-4.863,1.21h-6.16a2.145,2.145,0,0,1-2.142-2.142v-12.858h12.856v7.549a4.776,4.776,0,0,0-.679-.048,4.755,4.755,0,0,0-4.749,4.75,4.723,4.723,0,0,0,.875,2.747v0Zm-9.374-16.07v-2.143h3.75l1.071-1.071h5.357l1.072,1.071H-6382v2.143Z" transform="translate(6397 2299)"/>\n\t\t\t</svg>\n\t\t`,h.appendChild(a),n.default.displayNoneTitleNoItems(".fav--if-no-items"),n.default.enableBtn(".btn-clearfav")}deleteFromFavourites(t){this.arrFav=this.arrFav.filter((e=>e.id!=t)),this.setFavValues(this.arrFav),i.default.saveFav(this.arrFav);let e=this.getSingleFavBtn(t);this.removeLikedClass(e)}removeLikedClass(t){t.classList.remove("card-fav-btn--liked")}addLikedClass(t){t.classList.add("card-fav-btn--liked")}clearFav(){for(this.arrFav.map((t=>t.id)).forEach((t=>this.deleteFromFavourites(t)));h.children.length>0;)h.removeChild(h.children[0]);u.addNotification({text:"Your Favourites are empty!",alertClass:"alert__item--remove"}),n.default.displayBlockTitleNoItems(".fav--if-no-items"),n.default.disableBtn(".btn-clearbag"),n.default.closeBagFav(c,"fav--open")}populateFav(t){t.forEach((t=>this.addToFavourites(t)))}favLogic(){m.addEventListener("click",(()=>{this.clearFav()})),h.addEventListener("click",(t=>{if(t.target.closest(".item__icon--remove-from-fav")){let e=t.target,a=e.dataset.id;e.parentElement.classList.add("item--deleted"),u.addNotification({text:"Watch has been removed from Favourites!",alertClass:"alert__item--removed"}),setTimeout((()=>{this.deleteFromFavourites(a),h.removeChild(e.parentElement),e.parentElement.classList.remove("item--deleted")}),400)}else if(t.target.closest(".item__icon--add-to-bag")){let e=t.target,a=e.dataset.id,r={...i.default.getProduct(a),amount:1},s=i.default.getBag();if(s.find((t=>t.id==r.id)))return void alert(`${r.title} watch is already in Bag! You can only remove this item from the Favourites.`);
//! how to match btn on card and item which is added to bag from fav
if(s=[...s,r],super.arrBag=s,i.default.saveBag(super.arrBag),super.setBagValues(super.arrBag),super.addToBag(r),super.bagLogic(),this.arrFav=this.arrFav.filter((t=>t.id!=a)),i.default.saveFav(this.arrFav),console.table(s),console.table(super.arrBag),e.parentElement.classList.add("item--deleted"),this.deleteFromFavourites(a),setTimeout((()=>{h.removeChild(e.parentElement),e.parentElement.classList.remove("item--deleted")}),400),u.addNotification({text:`${r.title} has been added to the Bag!`,alertClass:"alert__item--added"}),"/allwatches.html"==window.location.pathname){let t=document.querySelector(".card .btn-addtobag");t.dataset.id==a&&(t.closest(".card").classList.add("card--added"),t.disabled=!0)}}}))}SETUP_FAV(){this.arrFav=i.default.getFav(),this.setFavValues(this.arrFav),this.populateFav(this.arrFav)}constructor(){super(),this._arrFav=[]}}})),s.register("cdf2t",(function(e,a){t(e.exports,"default",(function(){return v}));var r=s("bLOrV"),i=s("c6uJS"),n=s("2NEYp"),l=s("lxjv8");const o=document.querySelector(".navbar__bag-counter"),d=document.querySelector(".bag"),c=document.querySelector(".bag .btn-clearbag"),m=document.querySelector(".bag .total-price-items"),g=document.querySelector(".bag .items"),h=new l.default;let u=[];class v{get arrBag(){return this._arrBag}set arrBag(t){this._arrBag=t}getAddToBagBtns(){let t;"/index.html"==window.location.pathname||"/"==window.location.pathname?t=[...document.querySelectorAll(".add-to-bag")]:"/allwatches.html"==window.location.pathname&&(t=[...document.querySelectorAll(".btn-addtobag")]),u=t,t.forEach((t=>{let e=t.dataset.id,a=this.arrBag.find((t=>t.id==e));!a||"/"!=window.location.pathname&&"/index.html"!=window.location.pathname?a&&"/allwatches.html"==window.location.pathname&&(t.closest(".card").classList.add("card--added"),t.disabled=!0):(t.classList.add("btn--added"),t.innerHTML="ADDED &nbsp;&#10003;",t.disabled=!0),t.addEventListener("click",(t=>{"/"==window.location.pathname||"/index.html"==window.location.pathname?(t.target.classList.add("btn--added"),t.target.innerHTML="ADDED &nbsp;&#10003;"):"/allwatches.html"==window.location.pathname&&t.target.closest(".card").classList.add("card--added"),t.target.disabled=!0;let a={...r.default.getProduct(e),amount:1};this.arrBag=[...this.arrBag,a],r.default.saveBag(this.arrBag),this.setBagValues(this.arrBag),this.addToBag(a),h.addNotification({display:!0,text:`${a.title} has been added to Bag!`}),i.default.openBagFav(d,"bag--open")}))}))}setBagValues(t){let e=0,a=0;t.map((t=>{e+=t.price*t.amount,a+=t.amount})),m.innerText=`$ ${parseFloat(e.toFixed(2))}`,o.innerText=a}addToBag(t){let e=n.default.arrObjImgs;const a=document.createElement("article");a.classList.add("item"),a.innerHTML=`\n\t\t\t<figure class="item__figure">\n\t\t\t\t<img class="item__img" src=${e[t.id-1]} alt="watch-brown-white-${t.title}" />\n\t\t\t</figure>\n\n\t\t\t<div class="item__informations">\n\t\t\t\t<h3 class="item__title">${t.title}</h3>\n\t\t\t\t<h4 class="item__subtitle">${t.brand}</h4>\n\t\t\t\t<p class="item__price">$ ${t.price}</p>\n\t\t\t</div>\n\n\t\t\t<div class="item__controller">\n\t\t\t\t<div class="item__add" data-id=${t.id}>+</div>\n\t\t\t\t<div class="item__amount">${t.amount}</div>\n\t\t\t\t<div class="item__remove" data-id=${t.id}>-</div>\n\t\t\t</div>\n\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="item__icon item__icon--delete" data-id=${t.id} width="17.499" height="20.783" viewBox="0 0 17.499 20.783">\n\t\t\t\t<path d="M-6386.754-2279.46a4.252,4.252,0,0,1,0-6.011,4.254,4.254,0,0,1,6.009,0,4.257,4.257,0,0,1,0,6.012,4.234,4.234,0,0,1-3,1.242A4.238,4.238,0,0,1-6386.754-2279.46Zm3.991-1.466a.315.315,0,0,0,.446,0,.318.318,0,0,0,0-.448l-1.092-1.092,1.09-1.09a.318.318,0,0,0,0-.448.32.32,0,0,0-.448,0l-1.09,1.09-1.09-1.09a.318.318,0,0,0-.448,0,.317.317,0,0,0,0,.448l1.09,1.092-1.09,1.088a.318.318,0,0,0,0,.448.317.317,0,0,0,.448,0l1.09-1.09Zm-4.863,1.21h-6.16a2.145,2.145,0,0,1-2.142-2.142v-12.858h12.856v7.549a4.776,4.776,0,0,0-.679-.048,4.755,4.755,0,0,0-4.749,4.75,4.723,4.723,0,0,0,.875,2.747v0Zm-9.374-16.07v-2.143h3.75l1.071-1.071h5.357l1.072,1.071H-6382v2.143Z" transform="translate(6397 2299)"/>\n\t\t\t</svg>\n\t\t`,g.appendChild(a),i.default.displayNoneTitleNoItems(".bag--if-no-items"),i.default.enableBtn(".btn-checkout"),i.default.enableBtn(".btn-clearbag")}populateBag(t){t.forEach((t=>this.addToBag(t)))}bagLogic(){c.addEventListener("click",(()=>{this.clearBag()})),g.addEventListener("click",(t=>{if(t.target.closest(".item__icon--delete")){let e=t.target,a=e.dataset.id,r=this.arrBag.find((t=>t.id==a));e.parentElement.classList.add("item--deleted"),h.addNotification({text:`${r.title} has been removed from Bag!`,alertClass:"alert__item--removed"}),setTimeout((()=>{this.deleteFromBag(a),g.removeChild(e.parentElement),e.parentElement.classList.remove("item--deleted")}),400)}else if(t.target.matches(".item__add")){let e=t.target,a=e.dataset.id,i=this.arrBag.find((t=>t.id==a));console.table(this.arrBag),i.amount=i.amount+1,r.default.saveBag(this.arrBag),this.setBagValues(this.arrBag),e.nextElementSibling.innerText=i.amount;//! []
}else if(t.target.matches(".item__remove")){let e=t.target,a=e.dataset.id,i=this.arrBag.find((t=>t.id==a));i.amount=i.amount-1,i.amount>0?(r.default.saveBag(this.arrBag),this.setBagValues(this.arrBag),e.previousElementSibling.innerText=i.amount):(e.parentElement.parentElement.classList.add("item--deleted"),h.addNotification({text:"Watch has been removed from the Bag!",alertClass:"alert__item--removed"}),setTimeout((()=>{g.removeChild(e.parentElement.parentElement),this.deleteFromBag(a),e.parentElement.parentElement.classList.remove("item--deleted")}),400))}}))}clearBag(){for(this.arrBag.map((t=>t.id)).forEach((t=>this.deleteFromBag(t)));g.children.length>0;)g.removeChild(g.children[0]);h.addNotification({text:"Your Bag is empty!",alertClass:"alert__item--remove"}),i.default.displayBlockTitleNoItems(".bag--if-no-items"),i.default.disableBtn(".btn-checkout"),i.default.disableBtn(".btn-clearbag"),i.default.closeBagFav(d,"bag--open")}deleteFromBag(t){this.arrBag=this.arrBag.filter((e=>e.id!=t)),this.setBagValues(this.arrBag),r.default.saveBag(this.arrBag);let e=this.getSingleATBbtn(t);e.disabled=!1,"/"==window.location.pathname||"/index.html"==window.location.pathname?(e.classList.remove("btn--added"),"feature__footer"==e.parentElement.className?e.innerText="add to bag":e.innerHTML='\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="21.786" viewBox="0 0 16.5 21.786">\n\t\t\t\t\t\t<path d="M-6389-2281.464a4.254,4.254,0,0,1,4.25-4.25,4.255,4.255,0,0,1,4.251,4.25,4.256,4.256,0,0,1-4.251,4.25A4.256,4.256,0,0,1-6389-2281.464Zm2,.075a.318.318,0,0,0,.318.316h1.541v1.541a.318.318,0,0,0,.316.316.317.317,0,0,0,.316-.316v-1.541h1.544a.317.317,0,0,0,.314-.316.317.317,0,0,0-.314-.318h-1.544v-1.541a.316.316,0,0,0-.316-.316.317.317,0,0,0-.316.316v1.541h-1.541A.318.318,0,0,0-6387-2281.389Zm-1.726,2.848h0Zm-5.839,0a2.382,2.382,0,0,1-1.8-.833,2.633,2.633,0,0,1-.628-1.957l1.036-11.973a.617.617,0,0,1,.607-.581h1.825v-1.278a3.753,3.753,0,0,1,3.651-3.837,3.588,3.588,0,0,1,2.584,1.122,3.914,3.914,0,0,1,1.066,2.715v1.278h1.827a.616.616,0,0,1,.605.581l.631,7.273a5.007,5.007,0,0,0-1.342-.183,5.006,5.006,0,0,0-5,5,5,5,0,0,0,.774,2.675Zm2.26-16.623v1.278h4.87v-1.278a2.609,2.609,0,0,0-.711-1.811,2.39,2.39,0,0,0-1.724-.747A2.5,2.5,0,0,0-6392.305-2295.164Z" transform="translate(6397 2299.001)"/>\n\t\t\t\t\t</svg>\n\t\t\t\t\tadd to bag\n\t\t\t\t'):"/allwatches.html"==window.location.pathname&&e.closest(".card").classList.remove("card--added")}getSingleATBbtn(t){return u.find((e=>e.dataset.id==t))}SETUP_BAG(){this.arrBag=r.default.getBag(),this.setBagValues(this.arrBag),this.populateBag(this.arrBag)}constructor(){this._arrBag=[]}}})),s.register("f81x0",(function(e,a){t(e.exports,"default",(function(){return c}));const r=document.querySelector(".scrolltop"),i=document.querySelector(".scrolldown"),s=document.querySelector(".filtermobile"),n=document.querySelectorAll(".anim-from-bottom"),l=document.querySelectorAll(".anim-card-from-bottom"),o=[...document.querySelectorAll(".feature__figure"),...document.querySelectorAll(".feature__infos")],d=document.querySelectorAll(".anim-text");class c{scroll_observer(t,e,a){const r=new IntersectionObserver(((r,i)=>{r.forEach((r=>{r.isIntersecting&&r.target.className==t?(this.showScrollTop(),this.showScrollDown()):r.isIntersecting&&r.target.className==e&&this.hideScrollTop(),r.isIntersecting&&r.target.className==a?(this.hideScrollDown(),"/allwatches.html"==window.location.pathname&&this.hideFiltermobile()):"/allwatches.html"==window.location.pathname&&(this.showFiltermobile(),this.showScrollDown())}))}));[...document.querySelectorAll(`.${t}`),...document.querySelectorAll(`.${e}`),...document.querySelectorAll(`.${a}`)].forEach((t=>{r.observe(t)}))}showScrollTop(){r.classList.add("scrolltop--show")}hideScrollTop(){r.classList.contains("scrolltop--show")&&r.classList.remove("scrolltop--show")}hideScrollDown(){i.classList.add("scrolldown--hidden")}showScrollDown(){i.classList.contains("scrolldown--hidden")&&i.classList.remove("scrolldown--hidden")}hideFiltermobile(){s.classList.add("filtermobile--hidden"),s.style.animation="none"}showFiltermobile(){s.classList.contains("filtermobile--hidden")&&s.classList.remove("filtermobile--hidden")}animation_observer(){const t=new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.isIntersecting&&(t.target.classList.add("appear"),e.unobserve(t.target))}))}),{threshold:.5,rootMargin:"0px 0px 0px 0px"});n.forEach((e=>{t.observe(e)})),l.forEach((e=>{t.observe(e)})),o.forEach((e=>{t.observe(e)})),d.forEach((e=>{t.observe(e)}))}addObserveToEls(t,e){t.forEach((t=>{e.observe(t)}))}browserDontSupportObserver(){n.forEach((t=>{t.style.cssText="\n\t\t\t\topacity: 1;\n\t\t\t\ttransform: translate3d(0,0,0);\n\t\t\t"})),l.forEach((t=>{t.style.cssText="\n\t\t\t\topacity: 1;\n\t\t\t\ttransform: inherit;\n\t\t\t"})),o.forEach((t=>{t.style.cssText="\n\t\t\t\topacity: 1;\n\t\t\t\ttransform: translate3d(0,0,0);\n\t\t\t"})),d.forEach((t=>{t.style.cssText="\n\t\t\t\topacity: 1;\n\t\t\t\tletter-spacing: inherit;\n\t\t\t"}))}SETUP_OBSERVER(t){this.scroll_observer(t)}}}));