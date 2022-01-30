'use strict';

// DOM elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// Diplay and hide modal & overlay 
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModal = () => {
    modal.classList.remove('hidden'); // hidden refers to the html class name 'modal HIDDEN'. removing this makes modal visable 
    overlay.classList.remove('hidden'); // same as above for the overlay
}

// Create event listeners for each .show-modal button
btnShowModal.forEach(element => element.addEventListener('click', openModal));

// Close modal handlers
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); })