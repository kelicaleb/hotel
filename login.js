const speed = document.querySelector("#speed")

function formSpeed(){
  speed.addEventListener("submit", e => {
    e.preventDefault();
    const name = e.target.username.value;
    const password = e.target.password.value;
    fetch("http://localhost:3000/details",{
      method: "GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res => res.json())
    .then(data => data.forEach((data) => {
      const isvisible = data.username.includes(name) && data.password.includes(password);
      if(isvisible == true){
        window.location.href = "./home.html"
      }
      else if(isvisible == false){
        Swal.fire('Wrong email or password', '', 'info')
      }
    }))
  })
}
formSpeed();
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
