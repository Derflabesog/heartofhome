document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('mainHeader');

    // Handle scroll for sticky header shrinking
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
});