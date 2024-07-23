function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

locomotiveAnimation()





function navAnimation(){
    let nav=document.querySelector("nav")
nav.addEventListener("mouseenter",function(){
    let t1=gsap.timeline()
    t1.to("#nav-bottom",{
        height:"25vh",
    })
    t1.to(".option-detail h5",{
        display:"block"
       })
    t1.to(".option-detail h5 span",{
        y:0,
       stagger:{
        amount:0.4
       }
       })


})
nav.addEventListener("mouseleave",function(){
    let t1=gsap.timeline()
   
    t1.to(".option-detail h5 span",{
        y:25,
       stagger:{
        amount:0.3
       }
       })
       t1.to(".option-detail h5",{
        display:"none",
        duration: 0.15
       })
       t1.to("#nav-bottom",{
        height:0,
        duration:0.1

    })
    
})
}
navAnimation()


function p2animation(){
    let rightelem=document.querySelectorAll('.right-elem')
    rightelem.forEach(function(elem){
    
    
       elem.addEventListener('mouseenter',function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
       })
    
       
       elem.addEventListener('mouseleave',function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
       })
    
         
       elem.addEventListener('mousemove',function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x-elem.getBoundingClientRect().x-35,
            y:dets.y-elem.getBoundingClientRect().y-65
        })
       })
    })
}
p2animation()

function videoanimation(){
    let page3center= document.querySelector('#page3 .center')
let video = document.querySelector('video')


page3center.addEventListener('click',function(){
    video.play()
    gsap.to('video',{
        transform:'scaleX(1) scaleY(1)',
        opacity:1,
        borderRadius:0
    })

})


video.addEventListener('click',function(){
    video.pause()
    gsap.to('video',{
        transform:'scaleX(0.7) scaleY(0)',
        opacity:0,
        borderRadius:"20px"
    })

})
}
videoanimation()

function twodivanimation(){
    let rightbox= document.querySelectorAll('.sec-right')
rightbox.forEach((elem)=>{
elem.addEventListener('mouseenter',function(){
   elem.childNodes[3].style.opacity=1
   elem.childNodes[3].play()
})

elem.addEventListener('mouseleave',function(){
    elem.childNodes[3].style.opacity=0
    elem.childNodes[3].load()
 })
})
}
twodivanimation()

function part6Animation(){
    gsap.from('#btm6-part2 h4',{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:'#btm6-part2',
            scroller:'#main',
            start:'top 80%',
            end :' top 10%',
            scrub:true
        }
    })
}
part6Animation()

let t1=gsap.timeline()

t1.from('#page1',{
    opacity:0,
    duration:1,
    delay:0.2,
   
})


t1.from('#page1',{
   transform:'scaleX(0.7) scaleY(0) translateY(80%)',
   borderRadius:'100px',
   duration:2,
   ease:'expo.out'
   
})
t1.from('nav',{
    opacity:0,
    duration:0.3,
    delay:0.2,
    
})
t1.from('nav h1,#options,#but',{
    opacity:0,
   duration:0.5,
    delay:-0.2,
    
    
})
t1.from('#page1 h1',{
    opacity:0,
    duration:0.5,
    delay:-0.2,
    
    
})
t1.from('#page1 p,#tags,#moving-box',{
    opacity:0,
    duration:0.5,
    delay:-0.2,
    
    
})

