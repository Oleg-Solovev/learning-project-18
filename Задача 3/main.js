function progressBar(timeCount, arr) {
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
            renderArr(arr)
        }
    }, 1000)
}

function renderArr(arr) {
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

const catArr = ['img/cat1.jpg', 'img/cat2.jpg', 'img/cat3.jpg']
const dogArr = ['img/dog1.jpg', 'img/dog2.jpg', 'img/dog3.jpg']

const app = document.getElementById('app')
app.innerHTML = ''

const progress = (setTime, progressBar) => {
    let timeCount = setTime()
    progressBar(timeCount, catArr)
    setTimeout(progressBar(setTime(), dogArr), timeCount)
}

progress(setTime, progressBar)



