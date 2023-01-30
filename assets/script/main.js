
// Interaction flip (10)

let interface =document.querySelector('a:nth-of-type(10')

console.log(interface)


interface.onmousemove = function (e) {
  let rect = e.target.getBoundingClientRect();

  let x = e.clientX - rect.left;
  interface.style.setProperty("--btn-11-x", x + "px");
};
  
function mouseMove() {
  interface.classList.toggle('mouse-cursor-tracking')
}

console.log(mouseMove)

// Interaction flip (11)
let events =document.querySelector('a:nth-of-type(11)')

console.log(events)

events.addEventListener('mousemove', mouseMove)

function mouseMove () {
  events.classList.toggle('flipping')
}


// Interaction Jump (12)

let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Interaction (13) 
  let userFlow = document.querySelector('a:nth-of-type(13)') 
  console.log(userFlow)

  if (userFlow) {
    window.addEventListener('mousemove', (event) => {
      const xPercent = event.clientX / window.innerWidth - 0.2
      const yPercent = event.clientY / window.innerHeight - 0.5
      userFlow.style.transform = `rotateX(${yPercent * 40}deg) rotateY(${xPercent * 40}deg)`
	})
  
  window.addEventListener('mouseout', () => {
		userFlow.style.transform = `rotateX(0) rotateY(0)`
	})
}

// Interaction (14)

let wireflow = document.querySelector('a:nth-of-type(14)')

console.log(wireflow)

wireflow.addEventListener('click', click)

function click() {
  wireflow.classList.toggle('mouse-gardient-animation')
}


// Interaction (15)

let feedback = document.querySelector('a:nth-of-type(15)');

window.addEventListener("scroll", scrollTrigger);

function scrollTrigger() {
  feedback.classList.toggle("spin-rotate");
}


//Interaction Key-up event & key-down (16)//

let feedForward = document.querySelector('a:nth-of-type(16)')

console.log(feedForward)

feedForward.addEventListener('keydown', keydownhandler)
feedForward.addEventListener('keyup', keyuphandler)

function keydownhandler() {
  feedForward.classList.toggle('key-down')
}

function keyuphandler() {
  feedForward.classList.toggle('key-up')
}


// interaction rotate by keypress (17)
let labels = document.querySelector('a:nth-of-type(17)')

labels.addEventListener('keypress', dealWithKeyboard)

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

console.log(navigation)

navigation.addEventListener('click', clickHandler)

function clickHandler() {
  navigation.classList.toggle('click-blow')
}


// Interaction squat & stretch by dubble click (20)

let code = document.querySelector('a:nth-of-type(20)')

console.log(code)

code.addEventListener('dblclick', squatHandler)

function squatHandler() {
  code.classList.toggle('squat-stretch')
}




