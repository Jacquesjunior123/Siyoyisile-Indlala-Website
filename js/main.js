
document.addEventListener("DOMContentLoaded", () => {
    initInteractiveAccordions();
    initServiceSearch();
    initLightboxGallery();
    initInteractiveMap();
    initEnquiryAJAX();
});

function initInteractiveAccordions() {
    const accordions = document.querySelectorAll(".accordion-header");

    accordions.forEach(header => {
        header.addEventListener("click", () => {
            const panel = header.nextElementSibling;
            const isActive = header.classList.toggle("active");

            if (isActive) {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.padding = "15px";
                header.setAttribute("aria-expanded", "true");
            } else {
                panel.style.maxHeight = null;
                panel.style.padding = "0 15px";
                header.setAttribute("aria-expanded", "false");
            }
        });
    });
}

function initServiceSearch() {
    const searchInput = document.getElementById("farm-service-search");
    const serviceItems = document.querySelectorAll(".service-card");

    if (!searchInput || serviceItems.length === 0) return;

    searchInput.addEventListener("input", event => {
        const searchString = event.target.value.toLowerCase().trim();

        serviceItems.forEach(item => {
            const matches = item.textContent.toLowerCase().includes(searchString);
            item.style.display = matches ? "block" : "none";
            item.style.opacity = matches ? "1" : "0";
            item.style.transform = matches ? "scale(1)" : "scale(0.95)";
        });
    });
}

function initLightboxGallery() {
    const galleryImages = document.querySelectorAll(".farm-gallery img");

    if (galleryImages.length === 0) return;

    const overlay = document.createElement("div");
    overlay.id = "gallery-lightbox";
    overlay.style.cssText = "position:fixed;inset:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:none;justify-content:center;align-items:center;z-index:99999;cursor:zoom-out;";

    const expandedImg = document.createElement("img");
    expandedImg.style.cssText = "max-width:90%;max-height:85%;border:4px solid #fff;border-radius:4px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";

    overlay.appendChild(expandedImg);
    document.body.appendChild(overlay);

    galleryImages.forEach(img => {
        img.style.cursor = "zoom-in";

        img.addEventListener("click", () => {
            expandedImg.src = img.src;
            expandedImg.alt = img.alt;
            overlay.style.display = "flex";
        });
    });

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        expandedImg.src = "";
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            overlay.style.display = "none";
            expandedImg.src = "";
        }
    });
}

function initInteractiveMap() {
    const mapElement = document.getElementById("farm-location-map");

    if (!mapElement || typeof L === "undefined") return;

    const farmCoords = [-26.2891, 27.8115];
    const mapInstance = L.map(mapElement).setView(farmCoords, 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance);

    L.marker(farmCoords).addTo(mapInstance)
        .bindPopup("<b>Siyoyisile Indlala Community Farm</b><br>Faranani Primary School grounds.")
        .openPopup();
}

function initEnquiryAJAX() {
    const enquiryForm = document.getElementById("farm-enquiry-form");
    const responseBox = document.getElementById("enquiry-response-box");

    if (!enquiryForm || !responseBox) return;

    responseBox.setAttribute("role", "status");
    responseBox.setAttribute("aria-live", "polite");

    enquiryForm.addEventListener("submit", event => {
        event.preventDefault();

        enquiryForm.querySelectorAll(".form-error").forEach(error => error.remove());

        const nameField = document.getElementById("client-name");
        const emailField = document.getElementById("client-email");
        const typeField = document.getElementById("enquiry-type");
        const messageField = document.getElementById("client-message");

        const fields = [nameField, emailField, typeField, messageField];

        fields.forEach(field => {
            field.style.border = "";
            field.removeAttribute("aria-invalid");
        });

        responseBox.textContent = "";

        let isValid = true;

        if (nameField.value.trim().length < 2) {
            showInlineError(nameField, "Please enter a name with at least 2 characters.");
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailField.value.trim())) {
            showInlineError(emailField, "Please enter a valid email address.");
            isValid = false;
        }

        if (!typeField.value) {
            showInlineError(typeField, "Please select an enquiry category.");
            isValid = false;
        }

        if (messageField.value.trim().length < 10) {
            showInlineError(messageField, "Please enter a message with at least 10 characters.");
            isValid = false;
        }

        if (!isValid) {
            responseBox.textContent = "Please correct the errors above and try again.";
            responseBox.style.color = "#c62828";
            return;
        }

        responseBox.textContent = "Your details passed validation. Your enquiry has not yet been sent.";
        responseBox.style.color = "#1565c0";
    });
}

function showInlineError(inputElement, message) {
    inputElement.style.border = "2px solid #c62828";
    inputElement.setAttribute("aria-invalid", "true");

    const errorLabel = document.createElement("p");
    errorLabel.className = "form-error";
    errorLabel.style.cssText = "color:#c62828;font-size:0.85rem;margin:4px 0 0;font-weight:500;";
    errorLabel.textContent = message;

    inputElement.parentNode.appendChild(errorLabel);
}

