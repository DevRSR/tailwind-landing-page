let btn = document.getElementById("menu-btn");
let menu = document.querySelector("#menu");
btn.addEventListener('click', () =>{
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});


