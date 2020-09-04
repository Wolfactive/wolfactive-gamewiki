var itemScrollTo = document.querySelectorAll('.gamewiki__table-title a');

itemScrollTo.forEach((item, i) => {
    item.onclick = () => {
        scrollTo = item.getAttribute('target-scroll');
        document.getElementById(scrollTo).scrollIntoView({
            behavior: 'smooth'
        });
    }
})