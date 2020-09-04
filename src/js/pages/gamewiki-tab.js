var tabItem = document.querySelectorAll('.tab-item');
var tabContent = document.querySelectorAll('.tab-content');
var tabItemBottom = document.querySelectorAll('.gamewiki__tab-item');
var tabContentBottom = document.querySelectorAll('.gamewiki__tab-content');
if (tabItem && tabContent) {
    tabItem.forEach((jtem, i) => {
        jtem.onclick = () => {
            for (let i = 0; i < tabItem.length; i++) { tabItem[i].classList.remove('active'); }
            jtem.classList.add('active');
            tabName = event.srcElement.id;
            tabNameId = tabName + 'Content';
            tabContent.forEach((item, i) => {
                let temp = item.childNodes[0].parentElement.id;
                let tabContentOpen = document.querySelector('#' + tabNameId);
                if (temp == tabNameId) {
                    if (tabContentOpen.classList.contains('d--none')) {
                        tabContentOpen.classList.remove('d--none');
                    }
                } else {
                    if (!item.classList.contains('d--none')) {
                        item.classList.add('d--none');
                    }
                }
            })
        }
    })
}
if (tabItemBottom && tabContentBottom) {
    tabItemBottom.forEach((jtem, i) => {
        jtem.onclick = () => {
            console.log(event);
            for (let i = 0; i < tabItemBottom.length; i++) { tabItemBottom[i].classList.remove('active'); }
            jtem.classList.add('active');
            tabName = event.srcElement.id;
            tabNameId = tabName + 'ContentItem';
            console.log(tabNameId);
            tabContentBottom.forEach((item, i) => {
                let temp = item.childNodes[0].parentElement.id;
                let tabContentBottomOpen = document.querySelector('#' + tabNameId);
                if (temp == tabNameId) {
                    if (tabContentBottomOpen.classList.contains('d--none')) {
                        tabContentBottomOpen.classList.remove('d--none');
                    }
                } else {
                    if (!item.classList.contains('d--none')) {
                        item.classList.add('d--none');
                    }
                }
            })
        }
    })
}