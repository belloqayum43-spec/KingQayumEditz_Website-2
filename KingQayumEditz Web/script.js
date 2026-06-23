// Counter Animation

const counters = document.querySelectorAll('.counter');

function startCounter(counter) {
    const target = Number(counter.getAttribute('data-target'));
    let count = 0;

    const speed = target / 50;

    function updateCounter() {
        if (count < target) {
            count += speed;
            counter.innerText = Math.ceil(count);

            requestAnimationFrame(updateCounter);
        } else {
            if (target === 24) {
                counter.innerText = "24/7";
            } else {
                counter.innerText = target + "+";
            }
        }
    }

    updateCounter();
}

// Trigger animation when stats section enters screen

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target);
        }

    });
}, {
    threshold: 0.5
});

counters.forEach(counter => {
    observer.observe(counter);
});