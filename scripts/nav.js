const hiddenNav = () =>{
    nav.classList.add('hidden_nav')
    window.removeEventListener('scroll', disableScroll)
}

const showNav = () =>{
    nav.classList.remove('hidden_nav')
    window.addEventListener('scroll', disableScroll)
}

const hamburgerBtn = () =>{
    imgBtnMenu.setAttribute("src", './assets/images/icon-hamburger.svg')
    imgBtnMenu.classList.replace('close', 'hamburger')   
}

const closeBtn = () =>{
    imgBtnMenu.setAttribute("src", './assets/images/icon-close.svg')
    imgBtnMenu.classList.replace('hamburger', 'close') 
}


const btnMenu = document.getElementById('btnMenu')
const imgBtnMenu = document.getElementById('imgBtnMenu')
const nav = document.getElementById('nav')

function disableScroll(){  
    window.scrollTo(0, 0);
}

document.addEventListener('click', e => {
    if(e.target === btnMenu || e.target === imgBtnMenu) {
        if(nav.classList.contains('hidden_nav')){
            showNav()
            closeBtn()
        } else {
            hiddenNav()
            hamburgerBtn()
        }
    } else {
        hiddenNav()
        hamburgerBtn() 
    }
})

