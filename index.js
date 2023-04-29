const form = document.querySelector("#bookings")

form.addEventListener("submit", e => {
  e.preventDefault();
  const first_name = e.target.firstname.value
  const last_name = e.target.lastname.value
  const email = e.target.email.value;
  const date = e.target.date.value;
  const options = e.target.option.value;
  alert("Please check your email for further communication")
  fetch("http://localhost:3000/client",{
    method:"POST",
    body:JSON.stringify({
      First_name:first_name,
      Last_name: last_name,
      Email_address:email,
      Phone_number:Number,
      Date:date,
      Option:options,
    }),
    headers:{
      "Content-Type": "application/json"
    }
    })
    .then(res => res.json())
})

const swiper = new Swiper('.swiper', {
  autoplay:{
    delay:3000,
    disableOnInteraction:false
  },
  // Optional parameters
 
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
});
























$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});
