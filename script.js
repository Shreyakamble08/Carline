// Homepage JavaScript
(function() {
    'use strict';
    
    // Set hero background image (already done in HTML, keeping for reference)
    const heroElement = document.querySelector('.hero-section');
    if (heroElement) {
        // Background image is already set in HTML via inline style
        console.log('Hero section background image applied');
    }
    
    // Client logos data (placeholder - replace with actual client logos)
    const clientLogos = [
        { name: 'Client 1', logo: 'https://via.placeholder.com/150x80?text=Client+1' },
        { name: 'Client 2', logo: 'https://via.placeholder.com/150x80?text=Client+2' },
        { name: 'Client 3', logo: 'https://via.placeholder.com/150x80?text=Client+3' },
        { name: 'Client 4', logo: 'https://via.placeholder.com/150x80?text=Client+4' },
        { name: 'Client 5', logo: 'https://via.placeholder.com/150x80?text=Client+5' },
        { name: 'Client 6', logo: 'https://via.placeholder.com/150x80?text=Client+6' },
        { name: 'Client 7', logo: 'https://via.placeholder.com/150x80?text=Client+7' },
        { name: 'Client 8', logo: 'https://via.placeholder.com/150x80?text=Client+8' }
    ];
    
    // Initialize client carousel
    function initializeClientCarousel() {
        const carouselContainer = document.querySelector('.client-logos');
        if (!carouselContainer) return;
        
        // Duplicate logos for seamless scrolling
        const allLogos = [...clientLogos, ...clientLogos];
        
        allLogos.forEach(client => {
            const logoElement = document.createElement('div');
            logoElement.className = 'client-logo';
            logoElement.innerHTML = `<img src="${client.logo}" alt="${client.name}">`;
            carouselContainer.appendChild(logoElement);
        });
    }
    
    // Initialize page
    function initializeHomepage() {
        initializeClientCarousel();
        
        // Add event listeners for CTA buttons
        const viewProductsBtn = document.querySelector('a[href="#products"]');
        const requestQuoteBtn = document.querySelector('a[href="#quote"]');
        
        if (viewProductsBtn) {
            viewProductsBtn.addEventListener('click', (e) => {
                // Navigate to products page or scroll to products section
                e.preventDefault();
                const productsSection = document.getElementById('products');
                if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // Fallback: navigate to products page
                    window.location.href = '/products.html';
                }
            });
        }
        
        if (requestQuoteBtn) {
            requestQuoteBtn.addEventListener('click', (e) => {
                // Navigate to quote request page or scroll to quote section
                e.preventDefault();
                const quoteSection = document.getElementById('quote');
                if (quoteSection) {
                    quoteSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // Fallback: navigate to quote request page
                    window.location.href = '/request-quote.html';
                }
            });
        }
        
        console.log('Homepage initialized successfully');
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeHomepage);
    } else {
        initializeHomepage();
    }
})();