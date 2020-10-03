const controls = document.querySelectorAll('.control')
const testimonials = document.querySelectorAll('.testimonial')

let arrControls = [...controls]
let arrTestimonials = [...testimonials]

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