// ==============================
//  navabar closing and opening 
// ==============================



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



// ======================
//  vieo pause and play
// ======================


    let vid = document.getElementById("myVideo");

    let playBtn = document.getElementById("play");
    let pauseBtn = document.getElementById("pause");

    

    function playVid(){
      vid.play();
      playBtn.style.visibility="hidden"

      pauseBtn.style.visibility="visible" 

      console.log("worked");
    }

    function pauseVid(){
       vid.pause();
      playBtn.style.visibility="visible"
      pauseBtn.style.visibility="hidden";

    }



// ===============
//  typing effect
// ===============


var typed = new Typed(".auto-type",{
      strings: ['Web Developer', 'Web Designer', 'Artist' ,'Graphic Designer'],
      typeSpeed: 150,
      loop:true
});




// =============


// =============




// ===========
//   swiper 
// ===========

const swiper = new Swiper('.swiper', {
   initialSlide: 2,
   grabCursor:true,
   centeredSlides:true,
   speed:1200,
   spaceBetween:600,
   slidesPerView:"auto",
   effect:"coverflow",
   loop:true,
   
   
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


//   autoplay: {
//    delay: 3000,
//  },


});


// ===================================
//           modal functioning
// ===================================

var modalOpen = document.getElementById("open-modal")
var modalClose = document.getElementById("close-modal")
var modal = document.getElementById("modal")

modalOpen.onclick = function(){   
   modal.style.display="flex";
}

modalClose.onclick = function(){
   modal.style.display="none";
}



// ======== (  mailjs) ==============

function sendMail(){
    console.log("mail")
    let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      subject : document.getElementById("subject").value,
      message : document.getElementById("message").value,
    }

 console.log(parms)

    emailjs.send("service_9njknlc","template_d8ydzmo",parms).then(alert("Mail Sented"));

    
    
}


// =====================================
// =====================================
//        ball bouncing
// ====================================
// ====================================



function moveBall(){
    const btn =   document.getElementById("ball")
    btn.classList.add("bounce")

    setTimeout(function() {
        btn.classList.remove("bounce")
    }, 7000);

    console.log("working")
}

