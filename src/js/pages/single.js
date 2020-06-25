var domBody = document.getElementsByClassName("single");
if(domBody.length !== 0 ){    
    window.onscroll = () => {scrollFixedSideBar()};
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
    fetch(`http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topfreeapplications/genre=6014/limit=5/json?s=143471`)
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
    fetch(`http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topgrossingapplications/genre=6014/limit=5/json?s=143471`)
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