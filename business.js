let cartCount = 0;

function addToCart(productName) {
    cartCount++;
    updateCartCount();
    
    // Show notification using SweetAlert2
    Swal.fire({
        title: 'Added to Cart!',
        text: `${productName} has been added to your cart`,
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
        position: 'top-end',
        toast: true
    });
}

function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cartCount;
    
    // Add animation
    cartCountElement.classList.add('bump');
    setTimeout(() => {
        cartCountElement.classList.remove('bump');
    }, 300);
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Add hover effect for product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});