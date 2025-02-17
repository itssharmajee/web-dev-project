const imgs = document.querySelectorAll(".header-slider img");
const prevBtn = document.querySelector('.slide-prev');
const nextBtn = document.querySelector('.slide-next');

// Background Slider

let n = 0;
let imgLength = imgs.length;
function changeSlide() {
    for (let i = 0; i < imgLength; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSlide()


prevBtn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgLength - 1;
    }
    changeSlide()
})


nextBtn.addEventListener('click', (e) => {
    if (n < imgLength - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide()
})


// wheel scroll for slider

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel',(e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    })
}