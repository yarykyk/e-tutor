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

// our top instructors

document.querySelector('.TopInstructors__burger-button').addEventListener('click', function(){
    this.classList.toggle('is-active');
    document.querySelector('.TopInstructors__container').classList.toggle('is-active');
    document.querySelector('.TopInstructors__top-instrucctors-container').classList.toggle('is-active');
})
document.querySelector('.TopInstructors__closeBlock').addEventListener('click', function () {
    document.querySelector('.TopInstructors__container').classList.toggle('is-active');
    document.querySelector('.TopInstructors__burger-button').classList.toggle('is-active');
    document.querySelector('.TopInstructors__top-instrucctors-container').classList.toggle('is-active');
});
