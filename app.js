//Intro selectors
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//Section Selectors
const section = document.querySelector('section')
const secText = section.querySelector('h1')

//ScrollMagic 
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0 
})
.addIndicators()
.setPin(intro)
.addTo(controller)