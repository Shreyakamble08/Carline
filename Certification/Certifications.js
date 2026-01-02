// Certifications.js

(function() {
    'use strict';
    
    // Initialize page functionality
    function initializeCertificationsPage() {
        // Certificate download functionality
        const downloadButton = document.querySelector('.download-button');
        if (downloadButton) {
            downloadButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                // In a real application, this would trigger the certificate download
                // For this example, we'll show a success message
                showDownloadMessage();
            });
        }
        
        // Add loading state to images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            
            // If image is already loaded
            if (img.complete) {
                img.classList.add('loaded');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        console.log('Certifications page initialized successfully');
    }
    
    // Show download success message
    function showDownloadMessage() {
        const downloadButton = document.querySelector('.download-button');
        const originalText = downloadButton.innerHTML;
        
        // Change button text to show loading state
        downloadButton.innerHTML = `
            <svg class="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            Downloading...
        `;
        downloadButton.disabled = true;
        
        // Simulate download delay
        setTimeout(() => {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm';
            successMessage.innerHTML = `
                <div class="flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Certificate downloaded successfully!</span>
                </div>
            `;
            
            downloadButton.parentNode.appendChild(successMessage);
            
            // Reset button
            downloadButton.innerHTML = originalText;
            downloadButton.disabled = false;
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        }, 1500);
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCertificationsPage);
    } else {
        initializeCertificationsPage();
    }
})();