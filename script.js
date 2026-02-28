const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", ()=>{
  navLinks.classList.toggle("active");
});

const text = ["Mathematician", "AI Learner", "Web Developer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const typing = document.querySelector(".typing");

function type(){
  currentText = text[i];

  if(!isDeleting){
    typing.textContent = currentText.slice(0, ++j);
    if(j === currentText.length){
      isDeleting = true;
      setTimeout(type,1000);
      return;
    }
  } else {
    typing.textContent = currentText.slice(0, --j);
    if(j === 0){
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type,100);
}

type();

ScrollReveal().reveal('.section',{
  distance:'50px',
  duration:1000,
  origin:'bottom',
  interval:200
});