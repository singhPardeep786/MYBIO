
//-------RIGHT----CLICK---OFF-----//

window.addEventListener("contextmenu", e => e.preventDefault());

// ------------------------------------------------------------------------------------------------------//

var typingElement = document.querySelector(".typing-text");
var typeArray = ['Web Designer.', 'Graphic Designer.', 'Programmer.'];
var index = 0,
  isAdding = true,
  typeIndex = 0;

function playAnim() {
  setTimeout(
    function () {
      typingElement.innerText = typeArray[typeIndex].slice(0, index);
      // If typing
      if (isAdding) {
        if (index >= typeArray[typeIndex].length) {
          isAdding = false;
          // If text typed completely, wait 2s before starting to remove it.
          setTimeout(function () {
            playAnim();
          }, 2000);
          return;
        } else {
          // Continue to typing text by increasing index
          index++;
        }
      } else {
        // If removing
        if (index === 0) {
          isAdding = true;
          //If text removed completely, move on to next text by increasing typeIndex
          typeIndex++;
          if (typeIndex >= typeArray.length) {
            // Turn to beginning when reached to last text
            typeIndex = 0;
          }
        } else {
          // Continue to removing text by decreasing index
          index--;
        }
      }
      // Call the function always
      playAnim();
    },

    /* 
      If typing text, call it every 120ms
      If removing text, call it every 60ms
      Type slower, remove faster
    */
    isAdding ? 80 : 20
  );
}

// Start typing text
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

let mouseCursor = document.querySelector('.cursor');
let links = document.querySelectorAll(' button, input[type=submit], .html_skill');
let hovers = document.querySelectorAll('a, .photoshop_icon, .figma_icon');
let tilts = document.querySelectorAll('.tilt_box');

window.addEventListener('mousemove',cursor);

function cursor(e){
  gsap.to(mouseCursor, 0.4, {
      x: e.clientX,
      y: e.clientY
  });  
}

links.forEach(link => { 
  link.addEventListener( "mouseleave", () => {
    mouseCursor.classList.remove( "link-grow" );
      gsap.to(mouseCursor, 0.4, {
      scale: 1,     
    }); 
});
  
  link.addEventListener( "mouseover" , () => {
    mouseCursor.classList.add( "link-grow" );
    gsap.to(mouseCursor, 0.4, {
      scale: 2,  
    }); 
  });
});

hovers.forEach(hover => { 
  hover.addEventListener( "mouseleave", () => {
    mouseCursor.classList.remove( "hover-grow" );
      gsap.to(mouseCursor, 0.4, {
      scale: 1,    
    }); 
});
  
  hover.addEventListener( "mouseover" , () => {
    mouseCursor.classList.add( "hover-grow" );
    gsap.to(mouseCursor, 0.4, {
      scale: .8,
    }); 
  });
});

tilts.forEach(tilt => { 
  tilt.addEventListener( "mouseleave", () => {
    mouseCursor.classList.remove( "tilt-grow" );
      gsap.to(mouseCursor, 0.4, {
      scale: 1,    
    }); 
});
  
  tilt.addEventListener( "mouseover" , () => {
    mouseCursor.classList.add( "tilt-grow" );
    gsap.to(mouseCursor, 0.4, {
      scale: 1.5,
    }); 
  });
});

//----------GSAP---CODES--END-----------//

