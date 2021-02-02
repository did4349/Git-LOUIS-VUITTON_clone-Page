const SHOWING_CLASS = "showing";
const firstItem = window.document.body.querySelector('.carousel-item:first-child');

function slide(){  
    const currentSlide = window.document.body.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add(SHOWING_CLASS);
        }else{
            firstItem.classList.add(SHOWING_CLASS);    
        }
    }else{
        firstItem.classList.add(SHOWING_CLASS);
    }
}
slide();
setInterval(slide,4000);



