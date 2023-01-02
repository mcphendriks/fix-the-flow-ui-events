// Interaction Jump (12)

let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Interaction (18)

let states = document.querySelectorAll('a:n')

// Interaction blow up by mouse over (19)

let navigation = document.querySelector('a:nth-of-type(19)')

navigation.addEventListener('mouseover', hovered, false)
navigation.addEventListener('mouseout', hoveredOut, false)

console.log(navigation)

function hovered () {
  navigation.classList.toggle('blow-up')
}

function hoveredOut() {
  navigation.classList.toggle('blow-up')
}

// Interaction squat & stretch by dubble click (20)

let code = document.querySelector('a:nth-of-type(20)')

// console.log(squatStretch)

code.addEventListener('dblclick', squatHandler)

function squatHandler() {
  code.classList.toggle('squat-stretch')
}




