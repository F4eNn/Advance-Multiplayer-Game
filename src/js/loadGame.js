
function loadGame() {
	prepareGame()
	checkNumberPairs()
	checkIconPairs() // checkWhichPlayerHasTurn()
	switchPlayerTurn()
	gsap.fromTo('.container-timer', {y: -500}, {y: 0, ease: "bounce.out", duration: 2})
}

const restartEntireRound = () => {
	counterClicks = 1
	changePlayerAfterMove = 1
	countMoves = 0
	const cardBox = document.querySelectorAll('.single-card-box')
	const showGameContent = document.querySelector('.game-content')
	const multiplayerContainer = document.querySelectorAll('.footer-multiplayer .multiplayer-box-item')
	const ulListFromSummary = document.querySelectorAll('.multiplayer')
	setRandomNumber()
	setRandomIcon()
	ulListFromSummary.forEach(result => result.remove())
	multiplayerContainer.forEach(player => player.remove())
	cardBox.forEach(card => card.remove())
	showGameContent.classList.remove('toggle-game-content')
	getUserSettings(quantityPlayers, getSize, getTheme)
	clearInterval(countTimeTimer)
	timerInput.textContent = '0:00'
	movesInput.textContent = '0'
	switchPlayerTurn()
	checkNumberPairs()
	checkIconPairs() // checkWhichPlayerHasTurn()
	summaryContainer.classList.add('show-result')
	mobileMenu.classList.add('hide-button-menu')
}
const setupNewGame = () => {
	window.location.reload()
}
mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hide-button-menu'))
resumeBtn.addEventListener('click', () => mobileMenu.classList.toggle('hide-button-menu'))
newGame.forEach(btn => btn.addEventListener('click', setupNewGame))
restartGame.forEach(btn => btn.addEventListener('click', restartEntireRound))
btnTimer.addEventListener('click', closeTimerAndStartCount)
start.addEventListener('click', loadGame)

gsap.from('.container-timer', {duration: 2, ease: "bounce.out", y: -500 })