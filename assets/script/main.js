// Interaction Jump (12)

let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Interaction (15)






//Interaction Key-up event & key-down (16)//

let feedForward = document.querySelector('a:nth-of-type(16)')

console.log(feedForward)

feedForward.addEventListener('keydown', keydownhandler)
feedForward.addEventListener('keyup', keyuphandler)

function keyuphandler () {
  feedForward.classList.toggle('key-up')
}

function keydownhandler() {
  feedForward.classList.toggle('key-down')
}

// interaction rotate by keypress (17)
let labels = document.querySelector('a:nth-of-type(17)')

labels.addEventListener('keydown', dealWithKeyboard)
labels.addEventListener('keypress', dealWithKeyboard)
labels.addEventListener('keyup', dealWithKeyboard)

console.log(labels)

function dealWithKeyboard() {
  labels.classList.toggle ('rotate')
}
 

// Interaction  mouse enter (18)

let states =document.querySelector('a:nth-of-type(18)')

console.log(states)

states.addEventListener('mousemove', mouseIsMove)

function mouseIsMove () {
  states.classList.toggle('slide-left')
}

// Interaction blow up by mouse over (19)

let navigation = document.querySelector('a:nth-of-type(19)')

navigation.addEventListener('mouseover', hovered)
navigation.addEventListener('mouseout', hoveredOut)

console.log(navigation)

function hovered () {
  navigation.classList.toggle('blow-up')
}

function hoveredOut() {
  navigation.classList.toggle('blow-up')
}


// Interaction squat & stretch by dubble click (20)

let code = document.querySelector('a:nth-of-type(20)')

console.log(code)

code.addEventListener('dblclick', squatHandler)

function squatHandler() {
  code.classList.toggle('squat-stretch')
}




