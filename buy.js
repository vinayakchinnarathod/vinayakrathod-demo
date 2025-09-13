document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkout-form');

    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const purchaseBtn = document.querySelector('.purchase-btn');
        const originalBtnText = purchaseBtn.innerHTML;
        purchaseBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        purchaseBtn.disabled = true;

        // Simulate processing
        setTimeout(() => {
            // Show success message
            Swal.fire({
                icon: 'success',
                title: 'Purchase Successful!',
                text: 'Thank you for your order. You will receive a confirmation email shortly.',
                confirmButtonColor: '#2ecc71'
            }).then(() => {
                // Reset form and button
                checkoutForm.reset();
                purchaseBtn.innerHTML = originalBtnText;
                purchaseBtn.disabled = false;
                
                // Redirect to home page
                window.location.href = 'cart1.html';
            });
        }, 2000);
    });

    // Update total when payment method changes
    const paymentMethods = document.querySelectorAll('input[name="payment"]');
    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            const total = document.querySelector('.total span:last-child');
            const subtotal = 12.99;
            const shipping = 4.99;
            const fee = this.value === 'paypal' ? 1.00 : 0;
            total.textContent = `$${(subtotal + shipping + fee).toFixed(2)}`;
        });
    });
});
document.getElementById('addToCart').addEventListener('click', () => {
    const qty = document.getElementById('quantity').value;
    alert(`You added ${qty} chocolate(s) to your cart!`);
    // Optional: Call backend API here
});
const handleSubmit = (e) => {
    e.preventDefault();
  
    // Gather your order data (you would replace this with actual form values)
    const orderData = {
      productId: '12345',
      quantity: 2,
      customerName: 'John Doe',
      address: '123 Main St',
      // Add any other necessary fields
    };
  
    // Call the placeOrder function
    placeOrder(orderData);
  };
  const placeOrder = async (orderData) => {
    try {
      const response = await fetch('http://localhost:3001/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to place order');
      }
  
      const result = await response.json();
      console.log('Order placed successfully:', result);
      // Handle the result here, like updating state or showing a success message
    } catch (error) {
      console.error('Error:', error);
    }
  };

  