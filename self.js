const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')


let currentActive = 1;

next.addEventListener('click', function () {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener('click', function () {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1
    }
    update();
})

const update = function () {
    circles.forEach((circles, i) => {
        if(i < currentActive) {
            circles.classList.add('active')
        } else {
            circles.classList.remove('active')
        }
    })

    const active = document.querySelectorAll('.active')
    progress.style.width = (active.length - 1) / (circles.length- 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}