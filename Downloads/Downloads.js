// Downloads.js

(function() {
    'use strict';
    
    // Initialize page functionality
    function initializeDownloadsPage() {
        // Download button functionality
        const downloadButtons = document.querySelectorAll('.download-btn');
        downloadButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get file information from the card
                const card = this.closest('.download-card');
                const fileName = card.querySelector('h3').textContent;
                
                // Show download simulation
                simulateDownload(this, fileName);
            });
        });
        
        // Add loading state to page elements
        const downloadCards = document.querySelectorAll('.download-card');
        downloadCards.forEach(card => {
            card.classList.add('download-loaded');
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
        
        console.log('Downloads page initialized successfully');
    }
    
    // Simulate file download
    function simulateDownload(button, fileName) {
        const originalText = button.innerHTML;
        const originalBg = button.style.backgroundColor;
        
        // Change button to show loading state
        button.innerHTML = `
            <svg class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            Downloading...
        `;
        button.disabled = true;
        
        // Simulate download delay
        setTimeout(() => {
            // Show success message
            const card = button.closest('.download-card');
            const successMessage = document.createElement('div');
            successMessage.className = 'mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm';
            successMessage.innerHTML = `
                <div class="flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>${fileName} downloaded successfully!</span>
                </div>
            `;
            
            card.appendChild(successMessage);
            
            // Reset button
            button.innerHTML = originalText;
            button.disabled = false;
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
            
            // In a real application, you would trigger the actual file download here
            // For example: window.location.href = 'path/to/file.pdf';
            
        }, 1500);
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeDownloadsPage);
    } else {
        initializeDownloadsPage();
    }
})();