import Siema from 'siema';
if(window.location.pathname === "/" || window.location.pathname === "/wolfactive-gamewiki/"){
  new Siema({
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
mySiema = new Siema({
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
}

