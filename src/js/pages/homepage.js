import Siema from 'siema';
if(window.location.pathname === "/" || window.location.pathname === "/wolfactive-gamewiki/"){
  var childCarouselItem = document.querySelectorAll('#carouselContainBig .carousel__item');
  var childCarouselBtn = document.querySelector('.carousel__big-btn');
  const carsouselHome = new Siema({
  selector: '#carouselContainBig',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});
  if(childCarouselItem.length > 1){
    childCarouselBtn.innerHTML = `
    <button class="btn" aria-label="carousel-prev"><i class="fas fa-chevron-left icon"></i></button>
    <button class="btn" aria-label="carousel-next"><i class="fas fa-chevron-right icon"></i></button>
    `;
    document.querySelector('button[aria-label="carousel-prev"]').addEventListener('click', () => carsouselHome.prev());
    document.querySelector('button[aria-label="carousel-next"]').addEventListener('click', () => carsouselHome.next());
  }
var carouselVideoHomeItem = document.querySelectorAll('#latestVideo .slider_video .images_latest_video');
var carouselVideoHomeDot = document.querySelector('#latestVideo .slider_video-dot');
var carouselVideoHomeDotPage = Math.ceil(carouselVideoHomeItem.length/3);
const carsouselVideoHome =  new Siema({
  selector: '.slider_video',
  duration: 200,
  easing: 'ease-out',
  perPage: 3,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
  });
  if(carouselVideoHomeDotPage >1){
    let content =``;
    for(let i = 1; i <= carouselVideoHomeDotPage; i++){
      content += `<span class="d--inline--block mxr-5 dotVideo"><i class="fas fa-circle"></i></span>`;
    }
    carouselVideoHomeDot.innerHTML = content;
    var dotVideo =document.querySelectorAll('.dotVideo');
    dotVideo[0].classList.add('active');
    dotVideo.forEach((item,i)=>{
      item.addEventListener('click', () => {
        if(i!==0){
          dotVideo.forEach((item)=>{
            item.classList.remove('active');
          })
          item.classList.add('active');
          carsouselVideoHome.goTo((i+1)*3-2);
        }else{
          dotVideo.forEach((item)=>{
            item.classList.remove('active');
          })
          item.classList.add('active');
          carsouselVideoHome.goTo(i);
        }
      });
    })
  }
}
