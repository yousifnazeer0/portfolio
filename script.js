// Typing Effect
const text = ["Mathematician", "Analytical Thinker", "AI Explorer"];
let i=0,j=0,current="",deleting=false;
const typing=document.querySelector(".typing");

function type(){
current=text[i];
if(!deleting){
typing.textContent=current.slice(0,++j);
if(j===current.length){deleting=true;setTimeout(type,1000);return;}
}else{
typing.textContent=current.slice(0,--j);
if(j===0){deleting=false;i=(i+1)%text.length;}
}
setTimeout(type,100);
}
type();

// Scroll Reveal
ScrollReveal().reveal('.section',{distance:'60px',duration:1200,origin:'bottom',interval:200});

// Scroll Progress Bar
window.addEventListener("scroll",()=>{
let winScroll=document.body.scrollTop||document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
let scrolled=(winScroll/height)*100;
document.querySelector(".scroll-bar").style.width=scrolled+"%";
});
