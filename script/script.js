// Get the toggle button and nav links elements
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

// Add an event listener to the toggle button
toggleBtn.addEventListener('click', () => {
  // Toggle the .active class on the nav links
  navLinks.classList.toggle('active');
});




(function($) { "use strict";

$(document).ready(function(){"use strict";

		//Scroll back to top

		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})


	});

})(jQuery);

//email form

const form = document.querySelector("form");
const fullName= document.getElementById("name");
const email= document.getElementById("email");
const phone= document.getElementById("phone");
const subject= document.getElementById("subject");
const mess= document.getElementById("message");

function sendEmail(){

    const bodyMessage =`Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
   // const bodyMessage =`First Name: ${fname.value}<br> Last Name: ${lname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
    Email.send({
        Host : "smtp.hostinger.com",
        Username : "funkybeatent@gmail.com",
        Password : "34CF023398BAC4AA82CC98254944A79FB5A0",
        To : 'funkybeatent@gmail.com',
        //To : 'fjgoodgirl@gmail.com', //funkybeatent@gmail.com
        From : "funkybeatent@gmail.com",
        Subject : subject.value,
        Body : bodyMessage,
		
    }).then(
       // message=> alert(message)
       message => {
        if (message == "OK"){
            Swal.fire({
                title: "Thank you for sending  us a message!",
                text: "Email is sent to the Funkybeat team",
                icon: "success"
              });
            }
       }
    );
}

form.addEventListener("submit", (e) => {
     e.preventDefault();
       sendEmail();
});

// credentials username: boyparamio@gmail.com, password: 34CF023398BAC4AA82CC98254944A79FB5A0, server: smtp.elasticemail.com port: 