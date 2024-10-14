document.querySelector('#test').addEventListener('click', (e) => {
    console.log('e', e, e.target.id)
    if (e.target.id === 'laptop') {
        e.target.innerHtml = 'changing that'
    }
    if (e.target.id === 'Shoes') {
        e.target.innerHtml = 'go to shoes'
    }
    console.log(' e.target.innerHtml', e.target.innerHtml)
})

const firstUpperInput = document.getElementById('form')

firstUpperInput.addEventListener('keyup', (e) => {
    console.log('event', e)
    if (e.target.dataset.firstletteruppercase !== undefined) {
        let firstLetter = e.target.value.split('')[0].toUpperCase()
        let remaiLetter = e.target.value.split('').slice(1)
        e.target.value = firstLetter + remaiLetter.join('')

    }
})

const throttleDiv = document.querySelector('#throttle')
const debounceDiv = document.querySelector('#debounce')
let t_count = 0
let d_count = 0
let interval;
window.addEventListener('scroll', () => {
    console.log('calling')
    // throttling, when user scroll window then event is call after certain amount of time
    setTimeout(() => {
        t_count++;
        throttleDiv.innerHTML = `throttle count is : ${t_count}`
    }, 1000)

    // debouncing, when we scroll then count is increases after end of scroll and start of scroll again
    clearTimeout(interval)
   interval = setTimeout(() => {
        d_count++;
        debounceDiv.innerHTML = `debounce count is : ${d_count}`

    }, 1000)
})