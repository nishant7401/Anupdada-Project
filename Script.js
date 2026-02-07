// script.js - Enhanced with 3D Effects
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Create 3D Particles
    createParticles();

    // Scroll Progress Bar
    createScrollProgress();

    // 3D Card Effects
    init3DEffects();

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Animate skill bars on scroll
    animateSkillsOnScroll();
});

function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 10 + 2;
        const posX = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.backgroundColor = Math.random() > 0.5 ? 'var(--primary-color)' : 'var(--accent-color)';
        
        particlesContainer.appendChild(particle);
    }
}

function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

function init3DEffects() {
    // Add 3D class to cards
    document.querySelectorAll('.project-card, .blog-card, .timeline-content').forEach(card => {
        card.classList.add('card-3d');
    });

    // Mouse move parallax effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        document.querySelectorAll('.card-3d').forEach(card => {
            card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) translateZ(10px)`;
        });
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    
    // Create success animation
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-check"></i> Sent!';
    button.style.background = 'linear-gradient(45deg, #00ff88, #00cc66)';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
        this.reset();
    }, 2000);
}

function animateSkillsOnScroll() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 300);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}// Add this to your existing script.js or update the inline script

document.addEventListener('DOMContentLoaded', function() {
    // Add enhanced 3D elements
    const enhanced3DHTML = `
        <div class="bg-layer-3d bg-layer-3d-1"></div>
        <div class="bg-layer-3d bg-layer-3d-2"></div>
        
        <div class="mini-computer-container">
            <div class="mini-computer">
                <div class="mini-computer-screen"></div>
                <div class="mini-computer-base"></div>
            </div>
        </div>
        
        <div class="mouse-follower"></div>
        <div class="interactive-particles"></div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', enhanced3DHTML);
    
    // Enhanced 3D classes
    document.querySelectorAll('.blog-card').forEach(card => {
        card.classList.add('blog-card-3d', 'card-stack');
    });
    
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.add('btn-3d');
    });
    
    document.querySelectorAll('h1, h2, h3').forEach(heading => {
        heading.classList.add('text-3d');
    });
    
    // Add data-text to section titles for 3D effect
    document.querySelectorAll('.section-title h2').forEach(title => {
        title.setAttribute('data-text', title.textContent);
    });
    
    // Enhanced mouse interactions
    const mouseFollower = document.querySelector('.mouse-follower');
    const particlesContainer = document.querySelector('.interactive-particles');
    
    document.addEventListener('mousemove', (e) => {
        // Move follower
        if (mouseFollower) {
            mouseFollower.style.left = e.clientX + 'px';
            mouseFollower.style.top = e.clientY + 'px';
        }
        
        // Update computer rotation
        const computers = document.querySelectorAll('.computer-3d, .mini-computer');
        computers.forEach(computer => {
            if (computer) {
                const x = (e.clientX / window.innerWidth - 0.5) * 15;
                const y = (e.clientY / window.innerHeight - 0.5) * 15;
                computer.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
            }
        });
        
        // Create interactive particles
        if (particlesContainer && Math.random() > 0.7) {
            createParticle(e.clientX, e.clientY);
        }
    });
    
    // Enhanced scroll effects
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const computers = document.querySelectorAll('.computer-3d-container, .mini-computer-container');
        
        computers.forEach(computer => {
            if (computer) {
                // Parallax effect
                const speed = scrolled * 0.2;
                computer.style.transform = `translateY(${speed}px)`;
                
                // Fade effect
                const opacity = Math.max(0.2, 1 - scrolled / 1500);
                computer.style.opacity = opacity;
            }
        });
        
        // 3D tilt effect on blog cards
        const blogCards = document.querySelectorAll('.blog-card-3d');
        blogCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const centerY = rect.top + rect.height / 2;
            const screenCenter = window.innerHeight / 2;
            const distanceFromCenter = (centerY - screenCenter) / screenCenter;
            
            // Apply subtle tilt based on position
            const tilt = Math.max(-10, Math.min(10, distanceFromCenter * 15));
            card.style.transform = `rotateX(${tilt}deg) translateY(${distanceFromCenter * 20}px)`;
            
            // Add depth with z-index
            card.style.zIndex = Math.round(1000 - Math.abs(distanceFromCenter) * 100);
        });
    });
    
    // Interactive particles creation
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'interactive-particle';
        
        // Randomize particle properties
        const size = Math.random() * 3 + 1;
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 50 + 20;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.background = Math.random() > 0.5 ? 'var(--primary-color)' : 'var(--accent-color)';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
    
    // Enhanced hover effects for blog cards
    document.querySelectorAll('.blog-card-3d').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '1001';
            this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            // Add glow effect to the image
            const img = this.querySelector('.blog-img');
            if (img) {
                img.style.filter = 'brightness(1.1) contrast(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
            
            // Reset image
            const img = this.querySelector('.blog-img');
            if (img) {
                img.style.filter = '';
            }
        });
    });
    
    // Dynamic content loading animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                card.style.animationDelay = `${Math.random() * 0.5}s`;
                card.classList.add('animate-in');
                observer.unobserve(card);
            }
        });
    }, observerOptions);
    
    // Observe all blog cards
    document.querySelectorAll('.blog-card-3d').forEach(card => {
        observer.observe(card);
    });
});