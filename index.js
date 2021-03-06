function handleClick(sound) {
  let audio = new Audio('./sounds/' + sound)
  audio.play()
	document.addEventListener('click', (e) => {
		console.log(e.target)
		let button = e.target
		button.classList.add('pressed')
		setTimeout(() => {
			button.classList.remove('pressed')
		}, 200)
	})
}

document.addEventListener('keydown', (e) => {
  let chosenKey = e.key
  if ((chosenKey === 'w')) {
		audio = new Audio('./sounds/tom-1.mp3')
		audio.play()
		buttonAnimation(chosenKey)
	} else if (chosenKey === 'a') {
		audio = new Audio('./sounds/tom-2.mp3')
		audio.play()
		buttonAnimation(chosenKey)
	} else if (chosenKey === 's') {
		audio = new Audio('./sounds/tom-3.mp3')
		audio.play()
		buttonAnimation(chosenKey)
	} else if (chosenKey === 'd') {
		audio = new Audio('./sounds/tom-4.mp3')
		audio.play()
		buttonAnimation(chosenKey)
	} else if (chosenKey === 'j') {
		audio = new Audio('./sounds/snare.mp3')
		audio.play()
		buttonAnimation(chosenKey)
	} else if (chosenKey === 'k') {
		audio = new Audio('./sounds/crash.mp3')
		audio.play()
		buttonAnimation(chosenKey)
	} else if (chosenKey === 'l') {
		audio = new Audio('./sounds/kick-bass.mp3')
		audio.play()
		buttonAnimation(chosenKey)
	} 
})

function buttonAnimation(keyPress) {
	let button = document.querySelector('.' + keyPress)
	button.classList.add('pressed')
	setTimeout(() => {
		button.classList.remove('pressed')
	}, 200)
}
