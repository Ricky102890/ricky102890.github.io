function toggleAccountNavMenu() {
    const acctLink = document.getElementById("nav_acct_btn");
    const acctMenu = document.getElementById("nav_acct_menu");
    const acctCloseBtn = document.getElementById("acct_close_btn");
    const ariaBtn = document.getElementById("aria_btn");
    const ariaCloseBtn = document.getElementById("aria_close_btn")
    const ariaMenu = document.getElementById("aria_menu");
    acctLink.addEventListener("click", () => {
        acctMenu.classList.toggle("show");
    })
    // acctLink.addEventListener("mouseover", () => {
    //     acctMenu.classList.toggle("show");
    // })
    acctCloseBtn.addEventListener("click", () => {
        acctMenu.classList.toggle("show");
    })
    ariaBtn.addEventListener("click", () => {
        ariaMenu.classList.toggle("show");
    })
    ariaCloseBtn.addEventListener("click", () => {
        ariaMenu.classList.toggle("show");
    })
}
toggleAccountNavMenu();

function toggleServicesMenu() {
    const servicesBtn = document.getElementById("service_btn");
    const serviceMenu = document.getElementById("service_menu");
    const serviceCloseBtn = document.getElementById("close_mega_menu");
    // servicesBtn.addEventListener("mouseover", () => {
    //     serviceMenu.classList.toggle("show");
    // })
    servicesBtn.addEventListener("click", () => {
        serviceMenu.classList.toggle("show");
    })
    serviceCloseBtn.addEventListener("click", () => {
        serviceMenu.classList.toggle("show");
    })
}
toggleServicesMenu();

function toggleNavigation() {
    const hamburgerBtn = document.getElementById("hamburger_btn");
    const navMenu = document.getElementById("nav_bar");
    const closeNavBtn = document.getElementById("hide_nav");
    hamburgerBtn.addEventListener("click", () => {
        if(hamburgerBtn)
        hamburgerBtn.setAttribute("aria-expanded", "true");
    })
    closeNavBtn.addEventListener("click", () => {
        hamburgerBtn.setAttribute("aria-expanded", "false");
    })

}
toggleNavigation();

function reviewSlider() {
    const leftArrow = document.getElementById("left_arrow");
    const rightArrow = document.getElementById("right_arrow");
    const firstSlide = document.getElementById("first_slide");
    let currentIndex = 1;
    rightArrow.addEventListener("click", () => {
        if (currentIndex > 0 &&  currentIndex < 2) {
            firstSlide.style.marginLeft = '-20%';
            currentIndex++;
        }
        else if (currentIndex > 1 &&  currentIndex < 3) {
            firstSlide.style.marginLeft = '-40%';
            currentIndex++;
        }
        else if (currentIndex > 2 &&  currentIndex < 4) {
            firstSlide.style.marginLeft = '-60%';
            currentIndex++;
        }
        else if (currentIndex > 3 &&  currentIndex < 5) {
            firstSlide.style.marginLeft = '-80%';
            currentIndex++;
        }
        else {
            firstSlide.style.marginLeft = '0%';
            currentIndex = 1;
        }
    });
        leftArrow.addEventListener("click", () => {
            if (currentIndex > 1 && currentIndex < 3) {
                firstSlide.style.marginLeft = '0%';
                currentIndex--;
            }
            else if (currentIndex > 2 &&  currentIndex < 4) {
                firstSlide.style.marginLeft = '-20%';
                currentIndex--;
            }
            else if (currentIndex > 3 &&  currentIndex < 5) {
                firstSlide.style.marginLeft = '-40%';
                currentIndex--;
            }
            else {
                firstSlide.style.marginLeft = '0%';
                currentIndex = 1;
            }
    });
}
reviewSlider();