import './style.css';
import Swiper, { Autoplay } from 'swiper';
Swiper.use([Autoplay])
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: "auto",
    speed: 1e4,
    loop: true,
    freeMode: false,
    slidesPerGroup: 1,
    initialSlide: 4,
    autoplay: {
        delay: 0,
        disableOnInteraction: !1,
        reverseDirection: true
    },
    on:{
        loopFix:()=>{
            console.log(mySwiper.activeIndex);
        }
    }
});
console.log(mySwiper);
document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState == "hidden" && mySwiper.activeIndex < mySwiper.loopedSlides){
        mySwiper.slideTo(mySwiper.loopedSlides,0);
        // mySwiper.translateTo(mySwiper.snapGrid[mySwiper.activeIndex]/2,0);
        console.log("go 2")
    }
    if(document.visibilityState == "visible"){
        console.log("visible");
    }
})