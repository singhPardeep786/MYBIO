

var typingElement = document.querySelector(".typing-text");
var typeArray = ['Web Designer.', 'Graphic Designer.', 'Programmer.'];
var index = 0,
  isAdding = true,
  typeIndex = 0;

function playAnim() {
  setTimeout(
    function () {
      typingElement.innerText = typeArray[typeIndex].slice(0, index);
     
      if (isAdding) {
        if (index >= typeArray[typeIndex].length) {
          isAdding = false;
          setTimeout(function () {
            playAnim();
          }, 2000);
          return;
        } else {
          index++;
        }
      } else {
        if (index === 0) {
          isAdding = true;
          typeIndex++;
          if (typeIndex >= typeArray.length) {
            typeIndex = 0;
          }
        } else {
          index--;
        }
      }
      playAnim();
    },
    isAdding ? 80 : 20
  );
}
playAnim();



//--------back-to-top script START-------//

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight);

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);


//----------back-to-top script END---------//


//----------GSAP---CODES--START-----------//

gsap.from(".banner_animate", {
  y: -100,
  opacity: 0,
  duration: 1.5,
  delay: 1.5,
})

gsap.from(".svg_animate1", {
  scale: 0,
  opacity: 0,
  duration: 1.5,
  delay: 1.5,
})


var tl = gsap.timeline();

tl.from(".nav_animation", {
  y: -100,
  duration: 1,
  stagger: 0.2,
  delay: 1.5,
})

//----------GSAP---CODES--END-----------//

