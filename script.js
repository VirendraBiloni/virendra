burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

rightnav = document.querySelector(".rightnav");
leftnav = document.querySelector(".leftnav");

burger.addEventListener('click', () => {
    navbar.classList.toggle('hnav-res');
    rightnav.classList.toggle('vclass-res');
    leftnav.classList.toggle('vclass-res');
})