'use strict';

// element toggle function
const toggleElementClass = function (element) {
  element.classList.toggle("active");
}

// sidebar variables
const sidebarElement = document.querySelector("[data-sidebar]");
const sidebarToggleButton = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarToggleButton.addEventListener("click", function () {
  toggleElementClass(sidebarElement);
});

// testimonials variables
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainerElement = document.querySelector("[data-modal-container]");
const modalCloseButton = document.querySelector("[data-modal-close-btn]");
const overlayElement = document.querySelector("[data-overlay]");

// modal variable
const modalImage = document.querySelector("[data-modal-img]");
const modalTitleElement = document.querySelector("[data-modal-title]");
const modalTextElement = document.querySelector("[data-modal-text]");

// modal toggle function
const toggleTestimonialsModal = function () {
  modalContainerElement.classList.toggle("active");
  overlayElement.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItems.length; i++) {
  testimonialsItems[i].addEventListener("click", function () {
    modalImage.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImage.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitleElement.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalTextElement.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    toggleTestimonialsModal();
  });
}

// add click event to modal close button
modalCloseButton.addEventListener("click", toggleTestimonialsModal);
overlayElement.addEventListener("click", toggleTestimonialsModal);

// custom select variables
const selectElement = document.querySelector("[data-select]");
const selectItemsElements = document.querySelectorAll("[data-select-item]");
const selectValueElement = document.querySelector("[data-select-value]");
const filterButtons = document.querySelectorAll("[data-filter-btn]");

selectElement.addEventListener("click", function () {
  toggleElementClass(this);
});

// add event in all select items
for (let i = 0; i < selectItemsElements.length; i++) {
  selectItemsElements[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValueElement.innerText = this.innerText;
    toggleElementClass(selectElement);
    filterItemsByCategory(selectedValue);
  });
}

// filter variables
const filterableItems = document.querySelectorAll("[data-filter-item]");

const filterItemsByCategory = function (selectedValue) {
  for (let i = 0; i < filterableItems.length; i++) {
    if (selectedValue === "all") {
      filterableItems[i].classList.add("active");
    } else if (selectedValue === filterableItems[i].dataset.category) {
      filterableItems[i].classList.add("active");
    } else {
      filterableItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastActiveFilterButton = filterButtons[0];

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValueElement.innerText = this.innerText;
    filterItemsByCategory(selectedValue);

    lastActiveFilterButton.classList.remove("active");
    this.classList.add("active");
    lastActiveFilterButton = this;
  });
}

// contact form variables
const contactForm = document.querySelector("[data-form]");
const formInputElements = document.querySelectorAll("[data-form-input]");
const formSubmitButton = document.querySelector("[data-form-btn]");

// add event to all form input fields
for (let i = 0; i < formInputElements.length; i++) {
  formInputElements[i].addEventListener("input", function () {
    // check form validation
    if (contactForm.checkValidity()) {
      formSubmitButton.removeAttribute("disabled");
    } else {
      formSubmitButton.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navLinks = document.querySelectorAll("[data-nav-link]");
const pageElements = document.querySelectorAll("[data-page]");

// add event to all nav links
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    for (let j = 0; j < pageElements.length; j++) {
      if (this.innerHTML.toLowerCase() === pageElements[j].dataset.page) {
        pageElements[j].classList.add("active");
        navLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pageElements[j].classList.remove("active");
        navLinks[j].classList.remove("active");
      }
    }
  });
}
