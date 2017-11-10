var options = {
  strings: ["A Robotics Engineer.", "A Deep Learning Engineer.", "A Software Developer.", "A Designer."],
  smartBackspace: false,
  typeSpeed: 80,
  loop: true
}

var typed = new Typed('.element', options);


$(".contact-btn").click(function() {
  $(".contact-btn-a")[0].click();
  this.blur();
});