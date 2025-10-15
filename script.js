// Function to show/hide pages
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const page = document.getElementById(pageName);
    if (page) {
        page.classList.add('active');
    }

    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Set active link based on page name
    const activeLink = document.querySelector(`a[onclick="showPage('${pageName}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Function to handle contact form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create mailto link with pre-filled subject and body
    const mailtoLink = `mailto:your.email@example.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent('Name: ' + name + '\n\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
    
    // Open user's email client
    window.location.href = mailtoLink;

    // Reset form after submission
    document.getElementById('contactForm').reset();
    
    // Show confirmation message
    alert('Thank you for your message! Opening your email client...');
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize page
    console.log('UNO Portfolio Website loaded successfully!');
    
    // Add smooth scrolling for navigation
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function() {
            // Page transitions are handled by showPage function
        });
    });
});

// Optional: Add keyboard navigation
document.addEventListener('keydown', function(event) {
    // You can add keyboard shortcuts here if needed
    // For example: Press 1 for home, 2 for about, etc.
});