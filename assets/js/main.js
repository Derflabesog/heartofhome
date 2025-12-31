document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header Shrink Effect
    const header = document.getElementById('mainHeader');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shrink');
            } else {
                header.classList.remove('shrink');
            }
        });
    }

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true
        });
    }

    // Number Counters (for Investors page)
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        const updateCounter = () => {
            const c = +counter.innerText;
            if (c < target) {
                counter.innerText = Math.ceil(c + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });

    // Progress Bars (for Investors page)
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const fill = bar.querySelector('.fill');
        const value = bar.getAttribute('data-progress');
        if (fill && value) fill.style.width = value;
    });

    // Blog Search Functionality
    const searchInput = document.getElementById('blogSearch');
    const blogPosts = document.querySelectorAll('#blog-posts .card');

    if (searchInput && blogPosts.length > 0) {
        searchInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            blogPosts.forEach(post => {
                const title = post.querySelector('h3').innerText.toLowerCase();
                const desc = post.querySelector('p').innerText.toLowerCase();
                post.style.display = (title.includes(term) || desc.includes(term)) ? 'block' : 'none';
            });
        });
    }
});