
const prepareGame = () => {
	const entireMenu = document.querySelector('.start-game')
	const showGameContent = document.querySelector('.game-content')
	entireMenu.classList.toggle('toggle-start-setup')
	showGameContent.classList.toggle('toggle-game-content')
	getUserSettings(quantityPlayers, getSize, getTheme)
	createsRelevantMode()
}