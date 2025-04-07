document.querySelector('.header__burger-button').addEventListener('click', function(){
    this.classList.toggle('is-active');
    document.querySelector('.header__overlay').classList.toggle('is-active');
})