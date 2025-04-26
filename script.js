document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
    
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-menu nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Add scroll animation for smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
});


lucide.createIcons();

document.addEventListener('DOMContentLoaded', function() {
    // Get all unique image sources and alt texts
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const uniqueImages = [];
    const uniqueAlts = [];
    
    // Get unique images (avoid duplicates from the loop)
    portfolioItems.forEach(item => {
        const img = item.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        
        if (!uniqueImages.includes(src)) {
            uniqueImages.push(src);
            uniqueAlts.push(alt);
        }
    });
    
    // Modal elements
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.getElementById('prevButton');
    const nextBtn = document.getElementById('nextButton');
    
    let currentIndex = 0;
    
    // Open modal when clicking on an image
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const src = img.getAttribute('src');
            const alt = img.getAttribute('alt');
            
            // Find the index of the clicked image
            currentIndex = uniqueImages.indexOf(src);
            
            // Update modal with image details
            modalImg.src = src;
            modalImg.alt = alt;
            modalCaption.textContent = alt;
            
            // Show modal
            modal.classList.add('active');
            
            // Pause the marquee animation when modal is open
            document.querySelector('.marquee-track').style.animationPlayState = 'paused';
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('active');
        // Resume the marquee animation
        document.querySelector('.marquee-track').style.animationPlayState = 'running';
    }
    
    // Navigate to previous image
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + uniqueImages.length) % uniqueImages.length;
        updateModalImage();
    });
    
    // Navigate to next image
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % uniqueImages.length;
        updateModalImage();
    });
    
    // Update modal image and caption
    function updateModalImage() {
        modalImg.src = uniqueImages[currentIndex];
        modalImg.alt = uniqueAlts[currentIndex];
        modalCaption.textContent = uniqueAlts[currentIndex];
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        } else if (e.key === 'Escape') {
            closeModal();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor-follower");
    const projectCards = document.querySelectorAll(".project-card");
    
    // Update cursor position
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    
    // Show cursor on project hover
    projectCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            cursor.style.opacity = 1;
        });
        
        card.addEventListener("mouseleave", () => {
            cursor.style.opacity = 0;
        });
    });
    
    // No need to modify cursor for other elements anymore
});

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq_item_b6d1e');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq_question_f2a7d');
        
        question.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active_i4j6k');
            
            // Close all items first
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active_i4j6k');
            });
            
            // If the clicked item wasn't active, make it active
            if (!isActive) {
                item.classList.add('active_i4j6k');
            }
        });
    });
});