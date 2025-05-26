function progressBar(timeCount) {
    const progressBarEl = document.createElement('div')
    progressBarEl.classList.add('progress-bar')
    const timerEl = document.createElement('div')
    app.append(progressBarEl, timerEl)
    let time = 1
    progressBarEl.style.transition = `all linear ${timeCount}s`
    const timer = setInterval(() => {
        progressBarEl.style.transform = 'scaleX(1)'
        if (time <= timeCount) {
            timerEl.textContent = `${time++} c`
        } else {
            clearInterval(timer)
        }
    }, 1000)
}

function getCat() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['img/cat1.jpg', 'img/cat2.jpg', 'img/cat3.jpg'])
        }, 1000)
    })
}

function getDog() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['img/dog1.jpg', 'img/dog2.jpg', 'img/dog3.jpg'])
        }, 1000)
    })
}

function renderImage(arr) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrap')
    arr.forEach(el => {
        const imgEl = document.createElement('img')
        imgEl.src = el
        wrapper.append(imgEl)
    })
    app.append(wrapper)
}

function setTime() {
    return Math.round(Math.random() * 5) + 2
}

async function loadImages() {
    const randomNumberCat = setTime()
    progressBar(randomNumberCat)
    await new Promise(resolve => setTimeout(resolve, randomNumberCat * 1000))
    const catArr = await getCat()
    renderImage(catArr)

    const randomNumberDog = setTime()
    progressBar(randomNumberDog)
    await new Promise(resolve => setTimeout(resolve, randomNumberDog * 1000))
    const dogArr = await getDog()
    renderImage(dogArr)
}

const app = document.getElementById('app')
app.innerHTML = ''
loadImages()

