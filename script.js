const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function moveTicker() {
    const ticker = document.querySelector('.coin-ticker');
    const coins = ticker.children;
    const coinCount = coins.length;
    const coinWidth = coins[0].offsetWidth; 

    let distance = 0; 

    setInterval(() => {
        distance -= 1; 
        ticker.style.transform = `translateX(${distance}px)`; 

        if (distance % coinWidth === 0) {
            ticker.appendChild(ticker.firstElementChild); 
        }
    }, 30); 
}

moveTicker();
