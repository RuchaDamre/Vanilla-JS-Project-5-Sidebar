let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");
let close = document.querySelector(".close");

hamburger.addEventListener('click', function () {
    navbar.classList.add("demo");
});

close.addEventListener('click', function () {
    navbar.classList.remove("demo");
});

document.addEventListener("click", (evt) => {
    let targetEl = evt.target; // clicked element      
    do {
        if (targetEl == navbar || targetEl == hamburger) {
            // This is a click inside, does nothing, just return.
            return;
        }
        // Go up the DOM
        targetEl = targetEl.parentNode;
    } while (targetEl);
    // This is a click outside.      
    navbar.classList.remove("demo");
});
