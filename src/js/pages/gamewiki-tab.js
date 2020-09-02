var tabItem = document.querySelectorAll('.tab-item');
var tabContent = document.querySelectorAll('.tab-content');
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