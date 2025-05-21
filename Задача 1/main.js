const app = document.getElementById('app')
app.innerHTML = ''

function getCat() {
    const arr = ['img/cat1.jpg', 'img/cat2.jpg', 'img/cat3.jpg']
    return arr
}

function getDog() {
    const arr = ['img/dog1.jpg', 'img/dog2.jpg', 'img/dog3.jpg']
    return arr
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

const randomNumberCat = 1000 * (Math.round(Math.random() * 3) + 2)
const randomNumberDog = 1000 * (Math.round(Math.random() * 3) + 2)

// проверка в консоли
console.log(randomNumberCat, randomNumberDog)

// Котики
let getCatPromise = new Promise(function (resolve) {
    const arr = getCat()
    resolve(arr)
})
    .then(function (arr) {
        setTimeout(() => {
            renderArr(arr)
        }, randomNumberCat)
    })

// Собачки
let getDogPromise = new Promise(function (resolve) {
    const arr = getDog()
    resolve(arr)
})
    .then(function (arr) {
        setTimeout(() => {
            renderArr(arr)
        }, randomNumberDog)
    })


