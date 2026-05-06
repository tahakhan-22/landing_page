document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init

    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('open');
        mobileNav.classList.toggle('open');
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('open');
            mobileNav.classList.remove('open');
        });
    });

    // Vitals simulation (Randomly updating HR and SpO2 in the mockup)
    const hrElements = document.querySelectorAll('.value.hr');
    const spo2Elements = document.querySelectorAll('.value.spo2');

    setInterval(() => {
        hrElements.forEach(el => {
            const currentHr = parseInt(el.innerText);
            const change = Math.floor(Math.random() * 5) - 2;
            let newHr = currentHr + change;
            if (newHr > 130) newHr = 130;
            if (newHr < 60) newHr = 60;
            el.innerText = `${newHr} bpm`;
        });

        spo2Elements.forEach(el => {
            const currentSpo2 = parseInt(el.innerText);
            const change = Math.floor(Math.random() * 3) - 1;
            let newSpo2 = currentSpo2 + change;
            if (newSpo2 > 100) newSpo2 = 100;
            if (newSpo2 < 90) newSpo2 = 90;
            el.innerText = `${newSpo2}%`;
        });
    }, 2000);
});
