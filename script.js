// Update active navigation link based on current page
document.addEventListener('DOMContentLoaded', () => {
    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Update nav links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Add typing effect to terminal cursor if present
    const cursor = document.querySelector('.terminal-cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--tech-pink)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'var(--border-color)';
        });
    });

    // Add hover effects to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Smooth fade in on page load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add parallax effect to grid background
document.addEventListener('mousemove', (e) => {
    const gridBg = document.querySelector('.grid-background');
    if (gridBg) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        gridBg.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    }
});
