function progressBar() {
    let time = 1
    progressBarEl.style.transition = `all linear ${setTime}s`
    const timer = setInterval(() => {
        progressBarEl.style.transform = 'scaleX(1)'
        if (time <= setTime) {
            timerEl.textContent = `${time++} c`
        } else {
            clearInterval(timer)
        }
    }, 1000)
}

const app = document.getElementById('app')
app.innerHTML = ''

const progressBarEl = document.createElement('div')
progressBarEl.id = 'progress-bar'
progressBarEl.classList.add('progress-bar')

const timerEl = document.createElement('div')
app.append(progressBarEl, timerEl)

const setTime = Math.round(Math.random() * 5) + 2
// проверка в консоли
console.log(setTime)
progressBar()




