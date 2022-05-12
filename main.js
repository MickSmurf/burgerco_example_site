const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer =() => {
  return document.documentElement || document.body;
}

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
}


document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
});

backToTopButton.addEventListener("click", goToTop);

function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle);



