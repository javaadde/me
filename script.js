
function navClose(){
   document.getElementById("links").style.display="none"
   document.getElementById("nav-open").style.display="flex"
   document.getElementById("nav-close").style.display="none"
}

function navOpen(){
   document.getElementById("links").style.display="flex"
   document.getElementById("nav-open").style.display="none"
   document.getElementById("nav-close").style.display="flex"
}


    let vid = document.getElementById("myVideo");

    let playBtn = document.getElementById("play");
    let pauseBtn = document.getElementById("pause");

    

    function playVid(){
      vid.play();
      playBtn.style.visibility="hidden"

       setTimeout(() => {
      pauseBtn.style.visibility="visible" 
       },4000);

      console.log("worked");
    }

    function pauseVid(){
       vid.pause();
      playBtn.style.visibility="visible"
      pauseBtn.style.visibility="hidden";

    }















const swiper = new Swiper('.swiper', {

   grabCursor:true,
   centeredSlides:true,
   speed:1200,
   spaceBetween:600,
   slidesPerView:"auto",
   effect:"coverflow",
   
   coverflowEffect:{
    rotate:0,
    stretch:0,
    depth:60,
    modifier:1,
    slideShadows:false,
   },

   pagination:{
     el:".swiper-pagination",
   },

   // mousewheel:{
   //  invert:false,
   //  thresholdDelta:50,
   //  sensitivity:1,
   // },


   breakpoints:{
      260:{
         spaceBetween:30,
      },
      760:{
         spaceBetween:40,
      },
   },



    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

