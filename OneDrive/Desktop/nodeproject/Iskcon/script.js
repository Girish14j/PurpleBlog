
const carousel = document.querySelector('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slideIndex = 0

const slides = [
    {
        title: 'Maha Kumbh Mela Anna Daan',
        description: 'ISKCON will distribute 60,000 full meal of prasadam plates everyday. Total cost per day is Rs 30,00,000/-',
        date: '13 Jan 2025 - 26 Feb 2025'
    },
    {
        title: 'Maha Kumbh Mela Gita Daan',
        description: 'ISCKON will distribute 5,00,000 Bhagavad Gita free of cost to devotees, saints and visitors in Kumbh Mela @Prayagraj.',
        date: '13 Jan 2025 - 26 Feb 2025'
    },
    {
        title: 'Radharani Kitchen Seva',
        description: 'Krishna is most pleased when He honours foodstuff prepared by Srimati Radharani.Receive the blessings of Krishna and Radharani',
        date: '13 Jan 2025 - 26 Feb 2025'
    }
    // Add more slides here
];
function updateSlide(direction) {
    slideIndex = (slideIndex + direction + slides.length) % slides.length;
    const slide = slides[slideIndex];
    
    // Update content
    document.querySelector('h1').textContent = slide.title;
    document.querySelector('.description').textContent = slide.description;
    document.querySelector('.date').innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        ${slide.date}
    `;
}    

prevButton.addEventListener('click', () => updateSlide(-1));
nextButton.addEventListener('click', () => updateSlide(1));


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Close menu when clicking a link
navLinks.querySelectorAll('.nav-btn').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});