// Sticky header shrink on scroll
const header = document.getElementById("mainHeader");

// The scroll distance (in pixels) to trigger the shrink effect
const shrinkThreshold = 50;

window.addEventListener("scroll", () => {
    // Use classList.toggle() for a cleaner implementation.
    // The second argument is a boolean:
    // - if true, the class is added.
    // - if false, the class is removed.
    header.classList.toggle("shrink", window.scrollY > shrinkThreshold);
});

// Initialize AOS (Animate on Scroll)
AOS.init({ duration: 800, once: true });

// Counter animation
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      const increment = target / 200;

      let count = 0;
      const updateCounter = () => {
        count += increment;
        if(count < target){
          counter.textContent = Math.ceil(count);
          requestAnimationFrame(updateCounter);
        } else{
          counter.textContent = target;
        }
      };
      updateCounter();
      counterObserver.unobserve(counter);
    }
  });
}, { threshold: 0.5 });
counters.forEach(counter => counterObserver.observe(counter));

// Progress bars animation
const progressBars = document.querySelectorAll('.progress-bar');
const progressObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const fill = entry.target.querySelector('.fill');
      fill.style.width = entry.target.getAttribute('data-progress');
      progressObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
progressBars.forEach(bar => progressObserver.observe(bar));

// Blog Search Functionality
const searchInput = document.getElementById('blogSearch');
if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        const posts = document.querySelectorAll('#blog-posts .card');
        
        posts.forEach(post => {
            const title = post.querySelector('h3').innerText.toLowerCase();
            const excerpt = post.querySelector('p').innerText.toLowerCase();
            
            // Show if title OR excerpt matches the search term
            post.style.display = (title.includes(term) || excerpt.includes(term)) ? 'block' : 'none';
        });
    });
}