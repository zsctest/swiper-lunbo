// import './jquery.min.js'

import "./swiperAutoplay"

const addp = {}
addp.count = 0
addp.timeout
addp.start = Date.now();
addp.target = document.querySelector('.target')
addp.base = -1002.5
addp.distance = 0
addp.run = function(){
    const addp = this
    clearTimeout(this.timeout)
    this.count++
    this.timeout = setTimeout(()=>{
        addp.distance += 0.5
        $('.container').css({'transform':`translate3d(${addp.base + addp.distance}px,0,0)`})
        // console.log(addp.distance)

        addp.run()
        if(addp.distance >= 1002.5){
            addp.distance = 0
            $('.container').css({'transform':`translate3d(${addp.base + addp.distance}px,0,0)`})
        }
    },0)
    
}
addp.run()

let tid;
if(!tid) clearTimeout(tid);
$(".test").css({
    "transition-timing-function": "linear",
    "transition-duration": "10000ms"
})
tid = setTimeout(()=>$(".test").css("transform","translate3d(400px,0,0)"),1000)


// window.addEventListener("visibilyChange",()=>{
//     if(document.visibilityState == "hidden"){
//         clearTimeout(addp.timeout);
//     }
//     if(document.visibilityState == "visible"){
//         addp.run();
//     }
// })



