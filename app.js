//Intro selectors
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//Section Selectors
const section = document.querySelector('section')
const secText = section.querySelector('h1')

//ScrollMagic 
const controller = new ScrollMagic.Controller();

//Scene
let scene = new ScrollMagic.Scene({
    duration: 15000,
    triggerElement: intro,
    triggerHook: 0 
})
.addIndicators()
.setPin(intro)
.addTo(controller)

//Text Animation

const textAnime = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0,
})
.setTween(textAnime)
.addTo(controller)



 
//Video Animation

//accelAmount is something which we do for smoothing while scrolling through the video
//if we scroll all of a sudden then the video will little bit more than where we stop to look smoothly
// the lesser the amount the best smoothing we will get
let accelAmount = 0.1;
let scrollPosition = 0;
let delay = 0;
let Sc = ScrollMagic.scrollPos;

scene.on("update",  (event) => {    //scrollPos is coming from ScrollMagic
    scrollPosition = event.scrollPos / 1000;
    //console.log(event);
    
    
    setInterval(() => {
        delay += (scrollPosition - delay) * accelAmount;
        //console.log(scrollPosition, delay)
        video.currentTime = delay;
    },41.7)
    
})














//1000/24 = 41.666666667 fps
//setInterval(() => {
//    delay += (Sc - delay) * accelAmount;
//   //console.log(scrollPosition, delay);
////
//    video.currentTime = delay;
//},23.98);