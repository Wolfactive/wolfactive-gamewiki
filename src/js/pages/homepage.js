import Siema from 'siema';
import { mobileAndTabletCheck } from '../partten/mobileAndTabletCheck';
var homepage = document.querySelector('body.home');
if ((window.location.pathname === "/" || window.location.pathname === "/wolfactive-gamewiki/" || window.location.pathname === "/game-wiki/") && homepage) {
    /*First Carousel*/
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
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
    if (childCarouselItem.length > 1) {
        childCarouselBtn.innerHTML = `
    <button class="btn" aria-label="carousel-prev"><i class="fas fa-chevron-left icon"></i></button>
    <button class="btn" aria-label="carousel-next"><i class="fas fa-chevron-right icon"></i></button>
    `;
        document.querySelector('button[aria-label="carousel-prev"]').addEventListener('click', () => carsouselHome.prev());
        document.querySelector('button[aria-label="carousel-next"]').addEventListener('click', () => carsouselHome.next());
    }
    /*First Carousel*/
    /*Carousel Video*/
    var mobileCheck = mobileAndTabletCheck();
    var lastVideoCheck = document.querySelector('.slider_video');
    if (mobileCheck === false && lastVideoCheck) {
        var carouselVideoHomeItem = document.querySelectorAll('#latestVideo .slider_video .images_latest_video');
        var carouselVideoHomeDot = document.querySelector('#latestVideo .slider_video-dot');
        var carouselVideoHomeDotPage = Math.ceil(carouselVideoHomeItem.length / 3);
        const carsouselVideoHome = new Siema({
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
        if (carouselVideoHomeDotPage > 1) {
            let content = ``;
            for (let i = 1; i <= carouselVideoHomeDotPage; i++) {
                content += `<span class="d--inline--block mxr-5 dotVideo"><i class="fas fa-circle"></i></span>`;
            }
            carouselVideoHomeDot.innerHTML = content;
            var dotVideo = document.querySelectorAll('.dotVideo');
            dotVideo[0].classList.add('active');
            dotVideo.forEach((item, i) => {
                item.addEventListener('click', () => {
                    if (i !== 0) {
                        dotVideo.forEach((item) => {
                            item.classList.remove('active');
                        })
                        item.classList.add('active');
                        carsouselVideoHome.goTo((i + 1) * 3 - 2);
                    } else {
                        dotVideo.forEach((item) => {
                            item.classList.remove('active');
                        })
                        item.classList.add('active');
                        carsouselVideoHome.goTo(i);
                    }
                });
            })
        }
    } else if (mobileCheck === true && lastVideoCheck) {
        var carouselVideoHomeItem = document.querySelectorAll('#latestVideo .slider_video .images_latest_video');
        var carouselVideoHomeDot = document.querySelector('#latestVideo .slider_video-dot');
        var carouselVideoHomeDotPage = Math.ceil(carouselVideoHomeItem.length / 1);
        const carsouselVideoHome = new Siema({
            selector: '.slider_video',
            duration: 200,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: false,
            rtl: false,
            onInit: () => {},
            onChange: () => {},
        });
        if (carouselVideoHomeDotPage > 1) {
            let content = ``;
            for (let i = 1; i <= carouselVideoHomeDotPage; i++) {
                content += `<span class="d--inline--block mxr-5 dotVideo"><i class="fas fa-circle"></i></span>`;
            }
            carouselVideoHomeDot.innerHTML = content;
            var dotVideo = document.querySelectorAll('.dotVideo');
            dotVideo[0].classList.add('active');
            dotVideo.forEach((item, i) => {
                item.addEventListener('click', () => {
                    if (i !== 0) {
                        dotVideo.forEach((item) => {
                            item.classList.remove('active');
                        })
                        item.classList.add('active');
                        carsouselVideoHome.goTo((i + 1) * 3 - 2);
                    } else {
                        dotVideo.forEach((item) => {
                            item.classList.remove('active');
                        })
                        item.classList.add('active');
                        carsouselVideoHome.goTo(i);
                    }
                });
            })
        }
    }
    /*Carousel Video*/
    /*Post Carousel*/
    var carsouselPostHomeBtn = document.querySelector('.postList .postList__btn');
    var caroselPostList = document.querySelectorAll('.postList .postList__item');
    if (!mobileCheck) {
        const carsouselPostHome = new Siema({
            selector: '.postList__contain',
            duration: 200,
            easing: 'ease-out',
            perPage: 4,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: false,
            rtl: false,
            onInit: () => {},
            onChange: () => {},
        });
        if (caroselPostList.length > 4) {
            carsouselPostHomeBtn.innerHTML = `
        <button class="btn" aria-label="post-list-prev"><i class="fas fa-chevron-left icon"></i></button>
        <button class="btn" aria-label="post-list-next"><i class="fas fa-chevron-right icon"></i></button>
        `;
            document.querySelector('button[aria-label="post-list-next"]').addEventListener('click', () => carsouselPostHome.prev());
            document.querySelector('button[aria-label="post-list-prev"]').addEventListener('click', () => carsouselPostHome.next());
        }
    } else if (mobileCheck) {
        const carsouselPostHome = new Siema({
            selector: '.postList__contain',
            duration: 200,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: false,
            rtl: false,
            onInit: () => {},
            onChange: () => {},
        });
        if (caroselPostList.length > 4) {
            carsouselPostHomeBtn.innerHTML = `
        <button class="btn" aria-label="post-list-prev"><i class="fas fa-chevron-left icon"></i></button>
        <button class="btn" aria-label="post-list-next"><i class="fas fa-chevron-right icon"></i></button>
        `;
            document.querySelector('button[aria-label="post-list-next"]').addEventListener('click', () => carsouselPostHome.prev());
            document.querySelector('button[aria-label="post-list-prev"]').addEventListener('click', () => carsouselPostHome.next());
        }
    }

    /*Post Carousel*/
    /*Clik show post category*/
    var categoryList = document.querySelectorAll('.categoryList .categoryList__contain .term__link');
    categoryList.forEach((item) => {
            item.onclick = () => {
                let category = item.getAttribute("data-show");
                let apiUrl = ``;
                if (window.location.pathname === "/") {
                    apiUrl = `${protocol}//${hostname}/wp-json/blog-api/v1/blog/offset=0&category=${category}`;
                } else if (window.location.pathname === "/wolfactive-gamewiki/") {
                    apiUrl = `${protocol}//${hostname}/wolfactive-gamewiki/wp-json/blog-api/v1/blog/offset=0&category=${category}`;
                }
                fetch(apiUrl)
                    .then(response => response.json())
                    .then((data) => {
                        let content = ``;
                        let categoryShow = document.querySelector('.postList .postList__contain');
                        categoryShow.innerHTML = ``;
                        data.forEach((item) => {
                            content += `
          <div class="postList__item d--block">
            <div class="postList__item-img">
              ${item.thumbnail}
            </div>
            <a href="${item.url}" class="postList__item-title">
              <h3 class="title--item">${item.title}</h3>
            </a>
          </div>
          `;
                        })
                        categoryShow.innerHTML = content;
                        if (!mobileCheck) {
                            const carsouselPostHome = new Siema({
                                selector: '.postList__contain',
                                duration: 200,
                                easing: 'ease-out',
                                perPage: 4,
                                startIndex: 0,
                                draggable: true,
                                multipleDrag: true,
                                threshold: 20,
                                loop: false,
                                rtl: false,
                                onInit: () => {},
                                onChange: () => {},
                            });
                            if (caroselPostList.length > 4) {
                                carsouselPostHomeBtn.innerHTML = `
              <button class="btn" aria-label="post-list-prev"><i class="fas fa-chevron-left icon"></i></button>
              <button class="btn" aria-label="post-list-next"><i class="fas fa-chevron-right icon"></i></button>
              `;
                                document.querySelector('button[aria-label="post-list-next"]').addEventListener('click', () => carsouselPostHome.prev());
                                document.querySelector('button[aria-label="post-list-prev"]').addEventListener('click', () => carsouselPostHome.next());
                            }
                        } else if (mobileCheck) {
                            const carsouselPostHome = new Siema({
                                selector: '.postList__contain',
                                duration: 200,
                                easing: 'ease-out',
                                perPage: 1,
                                startIndex: 0,
                                draggable: true,
                                multipleDrag: true,
                                threshold: 20,
                                loop: false,
                                rtl: false,
                                onInit: () => {},
                                onChange: () => {},
                            });
                            if (caroselPostList.length > 4) {
                                carsouselPostHomeBtn.innerHTML = `
              <button class="btn" aria-label="post-list-prev"><i class="fas fa-chevron-left icon"></i></button>
              <button class="btn" aria-label="post-list-next"><i class="fas fa-chevron-right icon"></i></button>
              `;
                                document.querySelector('button[aria-label="post-list-next"]').addEventListener('click', () => carsouselPostHome.prev());
                                document.querySelector('button[aria-label="post-list-prev"]').addEventListener('click', () => carsouselPostHome.next());
                            }
                        }
                    })
                    .catch(err => console.log(err));
            }
        })
        /*Click show post category*/
        /*Click loadmore on game wiki*/
    var loadmoreBtnWiki = document.querySelector('.game_strategy .gtr_see_more');
    var loadmoreBtnShow = document.querySelector('.game_strategy .game_strategy-list');
    var offsetLoad = 12;
    loadmoreBtnWiki.onclick = () => {
        var loadmoreUrl = ``;
        if (window.location.pathname === "/") {
            loadmoreUrl = `${protocol}//${hostname}/wp-json/gamewiki-api/v1/gamewiki/offset=${offsetLoad}`;
        } else if (window.location.pathname === "/wolfactive-gamewiki/") {
            loadmoreUrl = `${protocol}//${hostname}/wolfactive-gamewiki/wp-json/gamewiki-api/v1/gamewiki/offset=${offsetLoad}`;
        }
        fetch(loadmoreUrl)
            .then(response => response.json())
            .then((data) => {
                let content = ``;
                data.forEach((item) => {
                    content += `
        <div class="col-divide-2 mc-mg col-divide-sm-6 col-divide-md-3">
            <div class="images_game_str">
                <a href="${item.url}">${item.thumbnail}</a>
            </div>
            <div class="title_game_str">
                <a href="${item.url}">${item.title}</a>
            </div>
        </div>
        `;
                })
                loadmoreBtnShow.innerHTML += content;
                if (data.length !== 12) {
                    loadmoreBtnWiki.style.display = "none";
                } else if (data.length === 12) {
                    offsetLoad = offsetLoad + 11;
                }
            })
    }
    var freeAppUrl = "";
    if (window.location.pathname === "/") {
        // freeAppUrl =`${protocol}//${hostname}/wp-content/themes/wolfactive-gamewiki/json/free-data.json`;
        freeAppUrl = `${protocol}//${hostname}/wp-json/ranking-api/v1/free`;
    } else if (window.location.pathname === "/wolfactive-gamewiki/") {
        freeAppUrl = `${protocol}//${hostname}/wolfactive-gamewiki/wp-json/ranking-api/v1/free`;
    } else if (window.location.pathname === "/game-wiki/") {
        freeAppUrl = `${protocol}//${hostname}/game-wiki/wp-json/ranking-api/v1/free`;
    }
    //console.log(freeAppUrl);
    fetch(freeAppUrl)
        .then(response => response.json())
        .then((data) => {
            
            let content = ``;
            let freeGameRanking = document.querySelector('#freeGameRanking');
            data.forEach((item, i) => {
                if (i < 5) {
                    let ratingCount = Math.round(item.star);
                    let ratingLeft = 5 - Math.round(item.star);
                    let rating = "";
                    for (i = 0; i < ratingCount; i++) {
                        rating += `<i class="fas fa-star"></i>`;
                    }
                    for (i = 0; i < ratingLeft; i++) {
                        rating += `<i class="fas fa-star left"></i>`;
                    }
                    content += `
        <div class="app-ranking__item">
          <div class="app-ranking__item-contain">
            <div class="app-ranking__item-img">
              <img src="${item.image}" alt="${item.url}" />
            </div>
            <div class="app-ranking__description">
              <p class="title--item">${item.title}</p> 
              <p class="app--star">${rating}</p>    
            </div>
          </div>
          <div class="app-ranking__item-btn">
            <a href="${item.url}" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-cloud-download-alt"></i>
            </a>
          </div>
        </div>
        `;
                }
            })
            freeGameRanking.innerHTML = content;
        })
    var grossingAppUrl = "";
    if (window.location.pathname === "/") {
        grossingAppUrl = `${protocol}//${hostname}/wp-json/ranking-api/v1/grossing`;
    } else if (window.location.pathname === "/wolfactive-gamewiki/") {
        grossingAppUrl = `${protocol}//${hostname}/wolfactive-gamewiki/wp-json/ranking-api/v1/grossing`;
    } else if (window.location.pathname === "/game-wiki/") {
        grossingAppUrl = `${protocol}//${hostname}/game-wiki/wp-json/ranking-api/v1/grossing`;
    }
    fetch(grossingAppUrl)
        .then(response => response.json())
        .then((data) => {
            let content = ``;
            let grossingGameRanking = document.querySelector('#grossingGameRanking');
            data.forEach((item, i) => {
                if (i < 5) {
                    let ratingCount = Math.round(item.star);
                    let ratingLeft = 5 - Math.round(item.star);
                    let rating = "";
                    for (i = 0; i < ratingCount; i++) {
                        rating += `<i class="fas fa-star"></i>`;
                    }
                    for (i = 0; i < ratingLeft; i++) {
                        rating += `<i class="fas fa-star left"></i>`;
                    }
                    content += `
                    <div class="app-ranking__item">
                    <div class="app-ranking__item-contain">
                      <div class="app-ranking__item-img">
                        <img src="${item.image}" alt="${item.url}" />
                      </div>
                      <div class="app-ranking__description">
                        <p class="title--item">${item.title}</p> 
                        <p class="app--star">${rating}</p>    
                      </div>
                    </div>
                    <div class="app-ranking__item-btn">
                      <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-cloud-download-alt"></i>
                      </a>
                    </div>
                  </div>
        `;
                }
            })
            grossingGameRanking.innerHTML = content;
        })
        /*Click loadmore on game wiki*/
        /*Render api app ranking*/
}