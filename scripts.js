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