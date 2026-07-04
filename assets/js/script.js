// Core functionality for navigation, sidebar, modals, and filtering

// ============================================
// Navigation - Switch between pages
// ============================================
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach(link => {
    link.addEventListener('click', function() {
        const pageName = this.dataset.navLink;
        
        // Remove active class from all nav links
        navigationLinks.forEach(link => link.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
        
        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));
        // Show the target page
        const targetPage = document.querySelector(`[data-page="${pageName}"]`);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    });
});

// ============================================
// Sidebar - Toggle contacts visibility
// ============================================
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebarBtn) {
    sidebarBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
}

// ============================================
// Testimonials Modal
// ============================================
const testimonialItems = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

// Function to open modal
const openModal = (item) => {
    const img = item.querySelector('[data-testimonials-avatar]');
    const title = item.querySelector('[data-testimonials-title]');
    const text = item.querySelector('[data-testimonials-text]');
    
    if (modalImg) modalImg.src = img ? img.src : './assets/images/avatar-1.png';
    if (modalTitle) modalTitle.textContent = title ? title.textContent : 'Testimonial';
    if (modalText) modalText.innerHTML = text ? text.innerHTML : '<p>Testimonial content goes here.</p>';
    
    if (modalContainer) modalContainer.classList.add('active');
};

// Function to close modal
const closeModal = () => {
    if (modalContainer) modalContainer.classList.remove('active');
};

// Add click listeners to testimonial items
testimonialItems.forEach(item => {
    item.addEventListener('click', function(e) {
        // Don't open modal if clicking on the testimonial itself (use the card)
        if (e.target.closest('.testimonials-item')) {
            openModal(this);
        }
    });
});

// Close modal events
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
if (overlay) overlay.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalContainer && modalContainer.classList.contains('active')) {
        closeModal();
    }
});

// ============================================
// Portfolio Filter
// ============================================
const filterButtons = document.querySelectorAll('[data-filter-btn]');
const filterSelect = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const projectItems = document.querySelectorAll('[data-filter-item]');

// Filter function
const filterProjects = (category) => {
    projectItems.forEach(item => {
        const itemCategory = item.dataset.category;
        if (category === 'All' || category === itemCategory) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
};

// Filter button click
filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const category = this.textContent.trim();
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Update select value
        if (selectValue) selectValue.textContent = category;
        
        // Filter projects
        filterProjects(category);
    });
});

// Filter select dropdown
if (filterSelect) {
    filterSelect.addEventListener('click', function() {
        const list = this.nextElementSibling;
        if (list) list.classList.toggle('active');
    });
}

// Select item click
selectItems.forEach(item => {
    item.addEventListener('click', function() {
        const category = this.textContent.trim();
        
        // Update select value
        if (selectValue) selectValue.textContent = category;
        
        // Update active filter button
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.trim() === category) {
                btn.classList.add('active');
            }
        });
        
        // Filter projects
        filterProjects(category);
        
        // Close dropdown
        const list = this.closest('.select-list');
        if (list) list.classList.remove('active');
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.filter-select-box')) {
        const lists = document.querySelectorAll('.select-list');
        lists.forEach(list => list.classList.remove('active'));
    }
});

// ============================================
// Contact Form - Auto-populate data attributes
// ============================================
const formInputs = document.querySelectorAll('[data-form-input]');

// Add validation styles on blur
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = 'red';
        } else {
            this.style.borderColor = 'var(--orange-yellow-crayola)';
        }
    });
});