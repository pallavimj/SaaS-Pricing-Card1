
const toggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price");

toggle.addEventListener("change", function () {
    prices.forEach(function(price) {
        const monthly = price.dataset.month;
        const yearly = price.dataset.year;

        if (toggle.checked) {
            price.innerHTML = "₹" + yearly + "<span>/month</span>";
        } else {
            price.innerHTML = "₹" + monthly + "<span>/month</span>";
        }
    });
});

// Get Started button functionality

const buttons = document.querySelectorAll(".card button");
const message = document.getElementById("message");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        const plan = button.closest(".card").querySelector("h2").textContent;

        message.style.display = "block";
        message.textContent = "Congratulations! You selected the " + plan + " plan.";

        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
});
