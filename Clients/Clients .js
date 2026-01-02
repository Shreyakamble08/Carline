// Clients & Industries JavaScript
(function() {
    'use strict';
    
    // Initialize Sales Chart
    function initializeSalesChart() {
        const ctx = document.getElementById('salesChart');
        if (!ctx) return;
        
        // Sample data - replace with actual data
        const chartData = {
            labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
            datasets: [
                {
                    label: 'Domestic Sales',
                    data: [65, 72, 78, 85],
                    backgroundColor: 'rgba(55, 65, 81, 0.8)',
                    borderColor: 'rgba(55, 65, 81, 1)',
                    borderWidth: 2,
                    borderRadius: 8,
                },
                {
                    label: 'Export Sales',
                    data: [15, 18, 20, 22],
                    backgroundColor: 'rgba(96, 165, 250, 0.8)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 2,
                    borderRadius: 8,
                }
            ]
        };
        
        const config = {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 14,
                                family: "'Inter', sans-serif"
                            },
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    title: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: {
                            size: 14,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 13
                        },
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1,
                        displayColors: true,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.y + '%';
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 12,
                                family: "'Inter', sans-serif"
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)',
                            drawBorder: false
                        },
                        ticks: {
                            font: {
                                size: 12,
                                family: "'Inter', sans-serif"
                            },
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        };
        
        // Create chart
        try {
            new Chart(ctx, config);
            console.log('Sales chart initialized successfully');
        } catch (error) {
            console.error('Error initializing chart:', error);
        }
    }
    
    // Counter Animation
    function animateCounter(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            
            // Handle percentage and + signs
            const text = element.textContent;
            if (text.includes('%')) {
                element.textContent = Math.round(current) + '%';
            } else if (text.includes('+')) {
                element.textContent = Math.round(current) + '+';
            } else {
                element.textContent = Math.round(current);
            }
        }, 16);
    }
    
    // Initialize counters when they come into view
    function initializeCounters() {
        const statValues = document.querySelectorAll('.stat-value');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    const text = entry.target.textContent;
                    const numValue = parseInt(text.replace(/\D/g, ''));
                    animateCounter(entry.target, 0, numValue, 2000);
                }
            });
        }, { threshold: 0.5 });
        
        statValues.forEach(stat => observer.observe(stat));
    }
    
    // Smooth scroll for anchor links
    function initializeSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#quote' || href === '#contact') {
                    e.preventDefault();
                    
                    if (href === '#quote') {
                        // Navigate to quote page or scroll to form
                        window.location.href = '/request-quote.html';
                    } else if (href === '#contact') {
                        // Navigate to contact page or scroll to form
                        window.location.href = '/contact.html';
                    }
                }
            });
        });
    }
    
    // Lazy load images
    function initializeLazyLoading() {
        const images = document.querySelectorAll('img[src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Initialize page
    function initializePage() {
        // Wait for Chart.js to load
        if (typeof Chart !== 'undefined') {
            initializeSalesChart();
        } else {
            console.warn('Chart.js not loaded yet');
            // Retry after a short delay
            setTimeout(() => {
                if (typeof Chart !== 'undefined') {
                    initializeSalesChart();
                }
            }, 500);
        }
        
        initializeCounters();
        initializeSmoothScroll();
        initializeLazyLoading();
        
        console.log('Clients & Industries page initialized successfully');
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePage);
    } else {
        initializePage();
    }
})();