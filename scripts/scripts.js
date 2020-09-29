import {hiddenNav, showNav, hamburgerBtn, closeBtn, btnMenu,imgBtnMenu,nav} from './nav.js'
import {arrControls,arrTestimonials} from './testimonials.js'


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

let index = 0

document.addEventListener('click', (e)=>{
    if(e.target === arrControls[e.target.id]){
    arrControls[index].classList.remove('active')
    arrTestimonials[index].classList.add('hidden')
    arrControls[e.target.id].classList.add('active')
    index = e.target.id
    arrTestimonials[index].classList.remove('hidden')
    }
})