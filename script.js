// Product filtering
function filterProducts() {
    const typeFilter = document.getElementById('type-filter').value;
    const gradeFilter = document.getElementById('grade-filter').value;
    const sizeFilter = document.getElementById('size-filter').value;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const type = product.getAttribute('data-type');
        const grade = product.getAttribute('data-grade');
        const size = product.getAttribute('data-size');

        const typeMatch = !typeFilter || type.includes(typeFilter);
        const gradeMatch = !gradeFilter || grade.includes(gradeFilter);
        const sizeMatch = !sizeFilter || size.includes(sizeFilter);

        if (typeMatch && gradeMatch && sizeMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    // Product filters
    const typeFilter = document.getElementById('type-filter');
    const gradeFilter = document.getElementById('grade-filter');
    const sizeFilter = document.getElementById('size-filter');

    if (typeFilter && gradeFilter && sizeFilter) {
        typeFilter.addEventListener('change', filterProducts);
        gradeFilter.addEventListener('change', filterProducts);
        sizeFilter.addEventListener('change', filterProducts);
    }

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formMessage = document.getElementById('form-message');

            // Basic validation
            if (!name || !email || !message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (in a real app, this would send data to server)
            showMessage('Thank you for your message! We will get back to you soon.', 'success');

            // Clear form
            contactForm.reset();

            function showMessage(text, type) {
                formMessage.textContent = text;
                formMessage.className = type;
                formMessage.style.display = 'block';

                // Hide message after 5 seconds
                setTimeout(function() {
                    formMessage.style.display = 'none';
                }, 5000);
            }
        });
    }
});
