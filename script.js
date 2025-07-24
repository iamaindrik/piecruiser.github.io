document.getElementById("myButton").addEventListener("click", function() {
  this.classList.add("animate");
  setTimeout(function() {
    window.location.href = "https://linktr.ee/piecruiser.in";
  }, 1000);
  });

function scrollToNextSection() {
  var specialSection = document.querySelector('.special-section');
  specialSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
  var specialSection = document.querySelector('.get-in-touch');
  specialSection.scrollIntoView({ behavior: 'smooth' });
}

$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});
  
var typing = new Typed(".text", {
  strings: ["", "the car.", "the robot."],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true
});

gsap.registerPlugin(ScrollTrigger);
const introsplitTypes = document.querySelectorAll(".left-part h1");
introsplitTypes.forEach((char, i) => {
  const i_text = new SplitType(char);
  gsap.to(i_text.chars, {
    y: 0,
    stagger: 0.08,
    duration: 0.3 
  });
});


