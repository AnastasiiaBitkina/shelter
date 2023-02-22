/* popup_1 */
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButton = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});
document.addEventListener('click', (e) =>{
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});
closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});
/*popup_2*/
let popupBg2 = document.querySelector('.popup__bg_2');
let popup2 = document.querySelector('.popup_2');
let openPopupButton2 = document.querySelectorAll('.open-popup_2');
let closePopupButton2 = document.querySelector('.close-popup_2');

openPopupButton2.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg2.classList.add('active');
        popup2.classList.add('active');
    })
});

document.addEventListener('click', (e) =>{
    if(e.target === popupBg2) {
        popupBg2.classList.remove('active');
        popup2.classList.remove('active');
    }
});
closePopupButton2.addEventListener('click', () => {
    popupBg2.classList.remove('active');
    popup2.classList.remove('active');
});
/*popup_3*/
let popupBg3 = document.querySelector('.popup__bg_3');
let popup3 = document.querySelector('.popup_3');
let openPopupButton3 = document.querySelectorAll('.open-popup_3');
let closePopupButton3 = document.querySelector('.close-popup_3');

openPopupButton3.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg3.classList.add('active');
        popup3.classList.add('active');
    })
});

document.addEventListener('click', (e) =>{
    if(e.target === popupBg3) {
        popupBg3.classList.remove('active');
        popup3.classList.remove('active');
    }
});
closePopupButton3.addEventListener('click', () => {
    popupBg3.classList.remove('active');
    popup3.classList.remove('active');
});