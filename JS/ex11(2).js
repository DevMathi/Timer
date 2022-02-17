const timerSelect = document.querySelector('.timer')
const buttonPlay = document.querySelector('.iniciar')
const buttonPause = document.querySelector('.pausar')
const buttonClear = document.querySelector('.zerar')
const hora = new Date()
let i = 0
let inicio
let final
let timer
let isPaused = false
timerSelect.innerHTML = mostraHora(00, 00, i)

buttonPlay.addEventListener('click', function (event) {
    if (timer != undefined) {
        isPaused = false
    } else {
        iniciaTempo()
    }
    inicio = 0
    timerSelect.style.color = 'black'
})

buttonPause.addEventListener('click', function (event) {
    clearInterval(timer)
    pausaTempo()
    timerSelect.style.color = 'red'
    timer = undefined
    console.log(isPaused)
    console.log(timer)
})

buttonClear.addEventListener('click', function (event) {
    clearInterval(timer)
    timer = undefined
    rezetTimer()
    timerSelect.style.color = 'red'
})

function iniciaTempo() {
    timer = setInterval(function interval() {
        if (isPaused) {
            return
        } else {
            timerSelect.innerHTML = mostraHora(i++)
        }
    }, 1000)
}
function pausaTempo() {
    final = hora.getSeconds()
    tempoDecorrido = final - inicio
    final = timerSelect.innerHTML = mostraHora(tempoDecorrido)
}

function mostraHora(tempomin) {
    hora.setHours(00)
    hora.setMinutes(00)
    hora.setSeconds(tempomin)
    return hora.toLocaleTimeString({
        hour12: false,
        minute: '2-digit',
        hour: '2-digit',
        second: '2-digit',
    })
}

function rezetTimer() {
    clearInterval(timer)
    i = 0
    timerSelect.innerHTML = mostraHora(00, 00, i)
}
