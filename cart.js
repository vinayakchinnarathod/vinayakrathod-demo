document.addEventListener('DOMContentLoaded', function() {
    // Show welcome popup when page loads
    const welcomePopup = document.getElementById('welcome-popup');
    welcomePopup.style.display = 'block';

    // Close welcome popup
    document.querySelector('.close-popup').addEventListener('click', function() {
        welcomePopup.style.display = 'none';
    });

    // Cart functionality
    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');

    // Buy Now functionality
    window.buyNow = function(productName, price) {
        const modal = document.getElementById('buy-modal');
        const modalDetails = document.getElementById('modal-product-details');
        modalDetails.innerHTML = `
            <h3>${productName}</h3>
            <p>Price: $${price}</p>
        `;
        modal.style.display = 'block';
    }

    // Close modal
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('buy-modal').style.display = 'none';
    });

    // Handle purchase form submission
    document.getElementById('purchase-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success notification
        showNotification('Purchase successful! Thank you for shopping with us.');
        
        // Update cart count
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Close modal
        document.getElementById('buy-modal').style.display = 'none';
        
        // Reset form
        this.reset();
    });

    // Notification function
    function showNotification(message) {
        const notification = document.getElementById('cart-notification');
        const notificationText = document.getElementById('notification-text');
        notificationText.textContent = message;
        notification.style.display = 'block';
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('buy-modal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});