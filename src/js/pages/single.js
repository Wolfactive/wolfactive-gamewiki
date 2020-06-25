// window.onscroll = function() {scrollFixedSideBar()};
var domBody = document.getElementsByClassName("single");
if(domBody.length != 0 ){
    console.log('True', domBody.length);
    window.onscroll = function() {scrollFixedSideBar()};
    var sidebarLeftscroll = document.getElementById("sideBarLeftScroll");
    var sidebarRightscroll = document.getElementById("sidebarRightscroll");
    var sidebarMenuRankingscroll = document.getElementById("sidebarMenuRankingscroll");
    var sidebarMenuLeftcroll = document.getElementById("sidebarMenuLeftcroll");
    var stickyLeft = sidebarLeftscroll.offsetTop;
    function scrollFixedSideBar() {
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
}else{
    console.log('False', domBody);
}
// var sidebarscroll = document.getElementById("sideBarScroll");
// var sticky = sidebarscroll.offsetTop;

// function scrollFixedSideBar() {
//   if (window.pageYOffset > sticky) {
//     sidebarscroll.classList.add("sticky");
//   } else {
//     sidebarscroll.classList.remove("sticky");
//   }
// }