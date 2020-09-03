var domBody = document.getElementsByClassName("single");
if (domBody.length != 0) {
    const backToTopButton = document.querySelector("#back-to-top-btn");
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    window.addEventListener("scroll", scrollFunction);

    function scrollFunction() {
        if (window.pageYOffset > 300) { // Show backToTopButton
            if (!backToTopButton.classList.contains("btnEntrance")) {
                backToTopButton.classList.remove("btnExit");
                backToTopButton.classList.add("btnEntrance");
                backToTopButton.style.display = "block";
            }
        } else { // Hide backToTopButton
            if (backToTopButton.classList.contains("btnEntrance")) {
                backToTopButton.classList.remove("btnEntrance");
                backToTopButton.classList.add("btnExit");
                setTimeout(function() {
                    backToTopButton.style.display = "none";
                }, 250);
            }
        }
    }

    backToTopButton.addEventListener("click", smoothScrollBackToTop);

    function smoothScrollBackToTop() {
        const targetPosition = 0;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 750;
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);
        }
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    };
    window.onscroll = function() { scrollFixedSideBar() };

    var sidebarLeftscroll = document.getElementById("sideBarLeftScroll");
    var sidebarRightscroll = document.getElementById("sidebarRightscroll");
    var sidebarMenuRankingscroll = document.getElementById("sidebarMenuRankingscroll");
    var sidebarMenuLeftcroll = document.getElementById("sidebarMenuLeftcroll");
    var stickyLeft = sidebarLeftscroll.offsetTop;
    const scrollFixedSideBar = () => {
        if (window.pageYOffset > stickyLeft) {
            sidebarLeftscroll.classList.add("roll_sidebar");
            sidebarRightscroll.classList.add("roll_sidebar");
            sidebarMenuRankingscroll.classList.add("roll_sidebar-menu");
            sidebarMenuLeftcroll.classList.add("roll_sidebar-menu");
        } else {
            sidebarLeftscroll.classList.remove("roll_sidebar");
            sidebarRightscroll.classList.remove("roll_sidebar");
            sidebarMenuRankingscroll.classList.remove("roll_sidebar-menu");
            sidebarMenuLeftcroll.classList.remove("roll_sidebar-menu");
        }
    }
    var freeAppUrl = "";
    if (protocol === "http:" && hostname === "localhost") {
        freeAppUrl = `${protocol}//${hostname}/game-wiki/wp-json/ranking-api/v1/free`;
    } else if (protocol === "https:" || protocol === "http:") {
        freeAppUrl = `${protocol}//${hostname}/wp-json/ranking-api/v1/free`;
    }
    console.log(freeAppUrl);
    fetch(freeAppUrl)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
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
    if (protocol === "http:" && hostname === "localhost") {
        grossingAppUrl = `${protocol}//${hostname}/game-wiki/wp-json/ranking-api/v1/grossing`;
    } else if (protocol === "https:" || protocol === "http:") {
        grossingAppUrl = `${protocol}//${hostname}/wp-json/ranking-api/v1/grossing`;
    }
    fetch(grossingAppUrl)
        .then(response => response.json())
        .then((data) => {
            let content = ``;
            let grossingGameRanking = document.querySelector('#grossingGameRanking');
            data.forEach((item, i) => {
                if (i < 5) {
                    let ratingCount = Math.round(item.rating);
                    let ratingLeft = 5 - Math.round(item.rating);
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
}