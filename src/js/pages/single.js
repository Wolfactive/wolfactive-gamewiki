var domBody = document.getElementsByClassName("single");
if(domBody.length != 0 ){
    const backToTopButton = document.querySelector("#back-to-top-btn");

    window.addEventListener("scroll", scrollFunction);

    function scrollFunction() {
    if (window.pageYOffset > 300) { // Show backToTopButton
        if(!backToTopButton.classList.contains("btnEntrance")) {
        backToTopButton.classList.remove("btnExit");
        backToTopButton.classList.add("btnEntrance");
        backToTopButton.style.display = "block";
        }
    }
    else { // Hide backToTopButton
        if(backToTopButton.classList.contains("btnEntrance")) {
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
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    };
    window.onscroll = function() {scrollFixedSideBar()};

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
    fetch(`http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topfreeapplications/genre=6014/limit=5/json?s=143471`,{
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
        "Content-Type": 'application/json; charset=utf-8'
        })
    })
    .then(response=> response.json())
    .then((data)=>{
    console.log(data.feed.entry);
    let content = ``;
    let freeGameRanking = document.querySelector('#freeGameRanking');
    data.feed.entry.forEach((item)=>{      
        content += `
        <div class="app-ranking__item">
        <div class="app-ranking__item-contain">
            <div class="app-ranking__item-img">
            <img src="${item["im:image"][0].label}" alt="${item["im:name"].label}" />
            </div>
            <div class="app-ranking__description">
            <p class="title--item">${item.title.label}</p>          
            </div>
        </div>
        <div class="app-ranking__item-btn">
            <a href="${item.id.label}" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-cloud-download-alt"></i>
            </a>
        </div>
        </div>
        `;
    })
    freeGameRanking.innerHTML = content;
    })
    fetch(`http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topgrossingapplications/genre=6014/limit=5/json?s=143471`,{
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
        "Content-Type": 'application/json; charset=utf-8'
        })
    })
    .then(response=> response.json())
    .then((data)=>{
    console.log(data.feed.entry);
    let content = ``;
    let grossingGameRanking = document.querySelector('#grossingGameRanking');
    data.feed.entry.forEach((item)=>{      
        content += `
        <div class="app-ranking__item">
        <div class="app-ranking__item-contain">
            <div class="app-ranking__item-img">
            <img src="${item["im:image"][0].label}" alt="${item["im:name"].label}" />
            </div>
            <div class="app-ranking__description">
            <p class="title--item">${item.title.label}</p>          
            </div>
        </div>
        <div class="app-ranking__item-btn">
            <a href="${item.id.label}" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-cloud-download-alt"></i>
            </a>
        </div>
        </div>
        `;
    })
    grossingGameRanking.innerHTML = content;
    })
}

