window.ondragstart = () => false; // for slider






const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu'); // consts for burger


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

// end code for burger

let pageId = document.querySelector('body').getAttribute('data-id-page');
const navItems = document.querySelectorAll('.nav__item'); // consts for nav

navItems.forEach((item) => {
    if(item.getAttribute('data-id-nav') === pageId){
        item.classList.add('nav__item_active');
    }
});

// end code for nav

if(pageId == "chain"){

    const optionMenu = document.querySelector(".form__select");
const selectBtn = optionMenu.querySelector(".form__select-button");
const options = optionMenu.querySelectorAll(".form__select-option");
const sBtn_text = optionMenu.querySelector(".form__select-button-text"); // consts for select

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    sBtn_text.innerText = option.innerText;
    optionMenu.classList.remove("active");
  });
});

// end code for select

const popup = document.querySelector(".popup");
const consultationButton = document.querySelector(".form__button");
const popupButton = document.querySelector(".popup__button"); // consts for popup

consultationButton.addEventListener('click', (item) => {
    item.preventDefault();
    popup.classList.add('active');
});

popupButton.addEventListener('click', (item) => {
    item.preventDefault();
    popup.classList.remove('active');
}); 

// end code for popup

}

// start code for slider
if(pageId === 'main'){ 
    const slider = document.querySelector('.slider');
    const before = document.querySelector('.slider__image-before');
    const beforeImage = before.querySelector('img');
    const resizer = document.querySelector('.slider__resizer');

    let active = false;

    document.addEventListener("DOMContentLoaded", function() {
        let width = slider.offsetWidth;
        beforeImage.style.width = width + 'px';
    });

    window.addEventListener('resize', function() {
        let width = slider.offsetWidth;
        beforeImage.style.width = width + 'px';
    })

    resizer.addEventListener('mousedown',function(){
        active = true;
        resizer.classList.add('resize');

    });

    document.body.addEventListener('mouseup',function(){
        active = false;
        resizer.classList.remove('resize');
    });

    document.body.addEventListener('mouseleave', function() {
        active = false;
        resizer.classList.remove('resize');
    });

    document.body.addEventListener('mousemove',function(e){
        if (!active) return;
        let x = e.pageX;
        x -= slider.getBoundingClientRect().left;
        slideIt(x);
    });

    resizer.addEventListener('touchstart',function(){
        active = true;
        resizer.classList.add('resize');
    });

    document.body.addEventListener('touchend',function(){
        active = false;
        resizer.classList.remove('resize');
    });

    document.body.addEventListener('touchcancel',function(){
        active = false;
        resizer.classList.remove('resize');
    });

    document.body.addEventListener('touchmove',function(e){
        if (!active) return;
        let x;

        let i;
        for (i=0; i < e.changedTouches.length; i++) {
            x = e.changedTouches[i].pageX;
        }

        x -= slider.getBoundingClientRect().left;
        slideIt(x);
    });

    function slideIt(x){
        let transform = Math.max(0,(Math.min(x,slider.offsetWidth)));
        before.style.width = transform+"px";
        resizer.style.left = transform-0+"px";
    }
}

// end code for slider




