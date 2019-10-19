console.log("Hi");
console.log(window.matchMedia('screen and (max-width: 767px)'));
const ipad = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector('.menu');
ipad.addListener(validation);
function validation(event){
    console.log(event);
    if(event.matches){
        const burgerButton = document.querySelector('#burger-menu');
        
        console.log(menu);
        console.log(burgerButton);
        burgerButton.addEventListener('click', hideShow);
        function hideShow(){
            /* if(menu.classList.contains('is-active')){
                menu.classList.remove('is-active');
            }else{ */
                menu.classList.toggle('is-active');
                /* } */
            }
        }else{
            burgerButton.addEventListener('click', hideShow);
    }
}