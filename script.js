document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const subject = document.querySelector("#subject").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (name === "" || email === "" || subject === "" || message === "") {
                event.preventDefault();
                alert("Please complete all fields before sending your message.");
            } else {
                event.preventDefault();
                alert("Thank you for contacting Siyoyisile Indlala Community Farm. Your message has been received.");
                form.reset();
            }
        });
    }
});