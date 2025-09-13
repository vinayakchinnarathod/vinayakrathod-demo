document.addEventListener('DOMContentLoaded', function() {
    const purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    const container = document.getElementById('purchase-container');

    function renderEmptyState() {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-bag"></i>
                <h2>No Purchases Yet</h2>
                <p>You haven't made any purchases. Check out our delicious collection!</p>
                <a href="business.html" class="browse-btn">Browse Products</a>
            </div>
        `;
    }

    function renderPurchaseList(purchases) {
        const purchaseHTML = purchases.map((purchase, index) => `
            <div class="purchase-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="purchase-image">
                    <img src="${purchase.image}" alt="${purchase.name}">
                </div>
                <div class="purchase-details">
                    <h3>${purchase.name}</h3>
                    <p class="price">$${purchase.price.toFixed(2)}</p>
                    <p class="date">Purchased on: ${new Date(purchase.date).toLocaleDateString()}</p>
                    <div class="status ${purchase.status.toLowerCase()}">${purchase.status}</div>
                </div>
            </div>
        `).join('');

        container.innerHTML = purchaseHTML;
        AOS.init({ duration: 800, once: true });
    }

    if (purchaseHistory.length === 0) {
        renderEmptyState();
    } else {
        renderPurchaseList(purchaseHistory);
    }
});
function addToPurchaseHistory(){
    const purchase = {
        name: document.querySelector('.product-details h1').textContent,
        price: parseFloat(document.querySelector('.current-price').textContent.replace('$', '')),
        image: document.querySelector('.product-image img').src,
        status: 'Completed',
        date: new Date().toISOString()
      };
      
      const history = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
      history.push(purchase);
      localStorage.setItem('purchaseHistory', JSON.stringify(history));
      
}