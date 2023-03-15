
const switchPlayerTurn = () => {
	const allPlayers = document.querySelectorAll('.player')
	const targetTurn = document.createElement('div')
	targetTurn.classList.add('target-turn')
	const turnInfo = document.createElement('p')
	turnInfo.classList.add('turn-info')
	turnInfo.textContent = 'current turn'
	const quantityOfPlayers = allPlayers.length
	if (changePlayerAfterMove == 1 && quantityOfPlayers >= changePlayerAfterMove) {
		allPlayers[0].classList.toggle('tracked')
		allPlayers[0].classList.toggle('untracked')
		allPlayers[0].appendChild(targetTurn)
		allPlayers[0].appendChild(turnInfo)
	} else if (changePlayerAfterMove == 2 && quantityOfPlayers >= changePlayerAfterMove) {
		const target = document.querySelector('.target-turn').remove()
		const turn = document.querySelector('.turn-info').remove()
		allPlayers[0].classList.toggle('untracked')
		allPlayers[0].classList.toggle('tracked')
		allPlayers[1].classList.toggle('untracked')
		allPlayers[1].classList.toggle('tracked')
		allPlayers[1].appendChild(targetTurn)
		allPlayers[1].appendChild(turnInfo)
	} else if (changePlayerAfterMove == 3 && quantityOfPlayers >= changePlayerAfterMove) {
		const target = document.querySelector('.target-turn').remove()
		const turn = document.querySelector('.turn-info').remove()
		allPlayers[1].classList.toggle('untracked')
		allPlayers[1].classList.toggle('tracked')
		allPlayers[2].classList.toggle('untracked')
		allPlayers[2].classList.toggle('tracked')
		allPlayers[2].appendChild(targetTurn)
		allPlayers[2].appendChild(turnInfo)
	} else if (changePlayerAfterMove == 4 && quantityOfPlayers >= changePlayerAfterMove) {
		const target = document.querySelector('.target-turn').remove()
		const turn = document.querySelector('.turn-info').remove()
		allPlayers[2].classList.toggle('untracked')
		allPlayers[2].classList.toggle('tracked')
		allPlayers[3].classList.toggle('untracked')
		allPlayers[3].classList.toggle('tracked')
		allPlayers[3].appendChild(targetTurn)
		allPlayers[3].appendChild(turnInfo)
	} else {
		const target = document.querySelector('.target-turn').remove()
		const turn = document.querySelector('.turn-info').remove()
		const lastElement = allPlayers[allPlayers.length - 1]
		lastElement.classList.toggle('tracked')
		lastElement.classList.toggle('untracked')
		allPlayers[0].classList.toggle('untracked')
		allPlayers[0].classList.toggle('tracked')
		allPlayers[0].appendChild(targetTurn)
		allPlayers[0].appendChild(turnInfo)
		changePlayerAfterMove = 1
	}
}
const addPairToRelevantPlayer = () => {
	const player = document.querySelector('.tracked')
	let EachPlayer = 0
	EachPlayer++
	let inputValue = Number(player.children[2].textContent)
	inputValue += EachPlayer
	player.children[2].textContent = inputValue
}

const countMoveQuantity = () => {
	movesInput.textContent = countMoves
}

const showPopupTimer = () => {
	timerPopup.classList.toggle('hideTimerPopup')
}

const closeTimerAndStartCount = () => {
	let sec = 0
	let min = 0

	timerPopup.classList.toggle('hideTimerPopup')

	countTimeTimer = setInterval(() => {
		if (sec < 9) {
			sec++
			timerInput.textContent = `${min}:0${sec}`
		} else if (sec >= 9 && sec < 59) {
			sec++
			timerInput.textContent = `${min}:${sec}`
		} else if (sec >= 59) {
			min++
			sec = 0
			timerInput.textContent = `${min}:00`
		}
	}, 1000)
}
