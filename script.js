const header=document.getElementById('header');
const hero=document.getElementById('hero');
const hamburger=document.getElementById('hamburger');
const nav=document.getElementById('nav');

window.addEventListener('scroll',()=>{
  if(window.scrollY>50){
    header.classList.add('show');
    hero.classList.add('shrink');
  }else{
    header.classList.remove('show');
    hero.classList.remove('shrink');
  }
});

hamburger.addEventListener('click',()=>nav.classList.toggle('show'));

// Intersection Observer
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.2});

document.querySelectorAll('.animate').forEach(el=>observer.observe(el));
