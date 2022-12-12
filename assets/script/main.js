// Interaction Jump

let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Interaction squat & stretch by dubble click

let code = document.querySelector('a:nth-of-type(20)')

// console.log(squatStretch)

code.addEventListener('dblclick', squatHandler)

function squatHandler() {
  code.classList.toggle('squat-stretch')
}



