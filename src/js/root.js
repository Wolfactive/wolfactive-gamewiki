import LazyLoad from "vanilla-lazyload";
import './pages/homepage';
import './pages/single';
import 'shareon'
/*VARIABLES*/
var iframe = document.querySelectorAll('iframe');
var img = document.querySelectorAll('img');
var video = document.querySelectorAll('video');
var protocol = window.location.protocol;
var hostname = window.location.hostname;
/*VARIABLES*/
/*Local Storage*/
function LuuVaoLocalStorage(Array,nameArray) {
    localStorage.clear();
    var jsonData = JSON.stringify(Array);
    localStorage.setItem(nameArray, jsonData);
}
/*nameArray là dạng string, array là biến array cần lưu vào*/
function LayLocalStorage(nameArray,Array) {
    var jsonData = localStorage.getItem(nameArray);
    if (!jsonData) { localStorage = []; return;}
    Array = JSON.parse(jsonData);
}
/*nameArray là dạng string, array là biến array cần lưu local vào*/
/*Local Storage*/
/* Resposive lazy load*/
function iframeResposive(){
  for (let i = 0; i < iframe.length; i++) {
      iframe[i].classList.add('lazy');
  }
}
function imgResposive(){
  for (let i = 0; i < img.length; i++) {
      img[i].classList.add('lazy');
  }
}
function videoResposive(){
  for (let i = 0; i < video.length; i++) {
      video[i].classList.add('lazy');
  }
}
iframe ? iframeResposive(): {};
img ? imgResposive(): {};
video ? videoResposive():{};
var lazyLoadInstance = new LazyLoad({elements_selector: ".lazy"});
/* Resposive lazy load*/

var freeAppUrl ="";
  if(window.location.pathname === "/"){
    freeAppUrl =`${protocol}//${hostname}/wp-content/themes/wolfactive-gamewiki/json/free-data.json`;
  }else if (window.location.pathname === "/wolfactive-gamewiki/") {
    freeAppUrl =`${protocol}//${hostname}/wolfactive-gamewiki/wp-content/themes/wolfactive-gamewiki/json/free-data.json`;
  }
  fetch(freeAppUrl)
  .then(response=> response.json())
  .then((data)=>{
    console.log(data);
    let content = ``;
    let freeGameRanking = document.querySelector('#freeGameRanking');
    data.content.forEach((item,i)=>{  
      if(i < 5){
        let ratingCount = Math.round(item.rating);
        let ratingLeft = 5 - Math.round(item.rating);
        let rating ="";
        for(i=0; i< ratingCount ; i++){
          rating += `<i class="fas fa-star"></i>`;
        }
        for(i=0; i< ratingLeft ; i++){
          rating += `<i class="fas fa-star left"></i>`;
        }
        content += `
        <div class="app-ranking__item">
          <div class="app-ranking__item-contain">
            <div class="app-ranking__item-img">
              <img src="${item.icon}" alt="${item.slug}" />
            </div>
            <div class="app-ranking__description">
              <p class="title--item">${item.title}</p> 
              <p class="app--star">${rating}</p>    
            </div>
          </div>
          <div class="app-ranking__item-btn">
            <a href="https://apps.apple.com/vn/app/${item.slug}/id${item.id}" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-cloud-download-alt"></i>
            </a>
          </div>
        </div>
        `;
      }     
    })
    freeGameRanking.innerHTML = content;
  })
  var grossingAppUrl ="";
  if(window.location.pathname === "/"){
    grossingAppUrl =`${protocol}//${hostname}/wp-content/themes/wolfactive-gamewiki/json/free-data.json`;
  }else if (window.location.pathname === "/wolfactive-gamewiki/") {
    grossingAppUrl =`${protocol}//${hostname}/wolfactive-gamewiki/wp-content/themes/wolfactive-gamewiki/json/grossing-data.json`;
  }
  fetch(grossingAppUrl)
  .then(response=> response.json())
  .then((data)=>{
    let content = ``;
    let grossingGameRanking = document.querySelector('#grossingGameRanking');
    data.content.forEach((item,i)=>{  
      if(i < 5){
        let ratingCount = Math.round(item.rating);
        let ratingLeft = 5 - Math.round(item.rating);
        let rating ="";
        for(i=0; i< ratingCount ; i++){
          rating += `<i class="fas fa-star"></i>`;
        }
        for(i=0; i< ratingLeft ; i++){
          rating += `<i class="fas fa-star left"></i>`;
        }
        content += `
        <div class="app-ranking__item">
          <div class="app-ranking__item-contain">
            <div class="app-ranking__item-img">
              <img src="${item.icon}" alt="${item.slug}" />
            </div>
            <div class="app-ranking__description">
              <p class="title--item">${item.title}</p> 
              <p class="app--star">${rating}</p>    
            </div>
          </div>
          <div class="app-ranking__item-btn">
            <a href="https://apps.apple.com/vn/app/${item.slug}/id${item.id}" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-cloud-download-alt"></i>
            </a>
          </div>
        </div>
        `;
      }     
    })
    grossingGameRanking.innerHTML = content;
  })