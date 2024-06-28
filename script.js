let ToUp = document.querySelector('.goToUp');


window.onscroll = function () {
    if(this.scrollY >= 1000) {
        ToUp.classList.add('show');
    } else {
        ToUp.classList.remove('show');
    }
}

ToUp.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
