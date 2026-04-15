document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Sticky Header Functionality
    const header = document.querySelector(".header_section");
    
    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // 2. Back to Top Button Functionality
    const backToTopBtn = document.getElementById("backToTop");
    
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            // Show button after scrolling down 300px
            if (window.scrollY > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        // Smooth scroll to top on click
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 3. Bootstrap Form Validation (For contact page form)
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    const forms = document.querySelectorAll('.needs-validation');
    
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            // Adds Bootstrap classes to show green checkmarks or red warnings
            form.classList.add('was-validated');
        }, false);
    });

});