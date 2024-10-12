document.querySelector('#test').addEventListener('click', (e) => {
    console.log('e', e, e.target.id)
    if(e.target.id === 'laptop') {
        e.target.innerHtml = 'changing that'
    }
    if(e.target.id === 'Shoes') {
        e.target.innerHtml = 'go to shoes'
    }
    console.log(' e.target.innerHtml', e.target.innerHtml)
})

const firstUpperInput = document.getElementById('form')

firstUpperInput.addEventListener('keyup', (e) => {
    console.log('event', e)
    if(e.target.dataset.firstletteruppercase !== undefined) {
        let firstLetter = e.target.value.split('')[0].toUpperCase()
        let remaiLetter = e.target.value.split('').slice(1)
        e.target.value = firstLetter + remaiLetter.join('')

    }
})