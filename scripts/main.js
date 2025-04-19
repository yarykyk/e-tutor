// Header dropmenu
document.querySelector('.header__burger-button').addEventListener('click', function(){
    this.classList.toggle('is-active');
    document.querySelector('.header__overlay').classList.toggle('is-active');
})

// Our Feature Corse
document.querySelector('.OurFeatureCorse__burger-button').addEventListener('click', function(){
    this.classList.toggle('is-active');
    document.querySelector('.OurFeatureCorse__container').classList.toggle('is-active');
})
document.querySelector('.OurFeatureCorse__closeBlock').addEventListener('click', function () {
    document.querySelector('.OurFeatureCorse__container').classList.toggle('is-active');
    document.querySelector('.OurFeatureCorse__burger-button').classList.toggle('is-active');
});
