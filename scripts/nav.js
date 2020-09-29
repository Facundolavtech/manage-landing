export const hiddenNav = () =>{
    nav.classList.add('hidden_nav')
    window.removeEventListener('scroll', disableScroll)
}

export const showNav = () =>{
    nav.classList.remove('hidden_nav')
    window.addEventListener('scroll', disableScroll)
}

export const hamburgerBtn = () =>{
    imgBtnMenu.setAttribute("src", './assets/images/icon-hamburger.svg')
    imgBtnMenu.classList.replace('close', 'hamburger')   
}

export const closeBtn = () =>{
    imgBtnMenu.setAttribute("src", './assets/images/icon-close.svg')
    imgBtnMenu.classList.replace('hamburger', 'close') 
}


export const btnMenu = document.getElementById('btnMenu')
export const imgBtnMenu = document.getElementById('imgBtnMenu')
export const nav = document.getElementById('nav')

function disableScroll(){  
    window.scrollTo(0, 0);
}