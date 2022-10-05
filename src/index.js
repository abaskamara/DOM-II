import './less/index.less'

// Your code goes here!
console.log('its working')

//LOAD
    window.onload = ((evt) => {
        console.log(`event ${evt.type} fired! Ready to go!`)
        const heading = document.querySelector('h1')
        heading.textContent = 'READY TO GO!!'

//COPY        
        window.addEventListener('copy', () => {
            navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
        })
    })

//CLICK
document.body.addEventListener('click', (evt) => {
    evt.target.classList.toggle('mirror')
})

//DBL CLICK
document.body.addEventListener('dblclick', (evt) => {
    evt.target.outerHTML = ''
})

//KEY DOWN
window.addEventListener('keydown', (evt) => {
    if(evt.key == 6){
        document.body.innerHTML = 'ERROR'
    }
})

//MOUSE MOVE
document.body.addEventListener('mousemove', (evt) => {
    const { clientX, clientY } = evt 
    //console.log(`mouse is at ${clientX}, ${clientY}`)
})

//MOUSE ENTER
const destinations = document.querySelectorAll('.destination')
destinations.forEach((destination) => {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'Bold'
        destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
     })
    })
    
})