

let tabNav = document.querySelectorAll('.nav-item');
let tabItem = document.querySelectorAll('.tab-content > .tab-item');

tabNav.forEach((item, i) => {
    item.setAttribute("tab", i);
});

tabItem.forEach((item, i) => {
    item.setAttribute("tab", i);
});

console.log(tabNav);
console.log(tabItem);

function showActiveTab(event) {
    let currentNav = event.currentTarget;
    let currentAttr = currentNav.getAttribute('tab');
    let classes = currentNav.className.split(" ");
    let isActive = false;

    classes.forEach( item => {
        if (item === 'active') {
            isActive = true;
        }else{
            isActive = false;
        }
    })

    if (isActive) {
        
    } else {
        tabItem.forEach(item => {
            if (item.getAttribute('tab') == currentAttr) {
                tabNav.forEach(item => {
                    item.classList.remove('active');
                });
                
                currentNav.classList.add('active');
                item.classList.add('active')
            } else {
                item.classList.remove('active');
            }
        })
    }
    console.log(currentNav);
}

for (let i = 0; i < tabNav.length; i++) {
    tabNav[i].addEventListener('click', showActiveTab);
    
}

