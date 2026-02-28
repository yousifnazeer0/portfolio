// Fade animation
const faders=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
  const trigger=window.innerHeight*0.85;
  faders.forEach(section=>{
    const top=section.getBoundingClientRect().top;
    if(top<trigger){
      section.classList.add("show");
    }
  });
});

// Active nav highlight
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach(section=>{
    const sectionTop=section.offsetTop-120;
    if(scrollY>=sectionTop){
      current=section.getAttribute("id");
    }
  });

  navLinks.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href")=="#"+current){
      link.classList.add("active");
    }
  });
});
