const buttons = document.querySelectorAll('.button-box button ')
const start = document.querySelector('.button-box__button--primary')
const timerPopup = document.querySelector('.get-ready-timer')
const btnTimer = document.querySelector('.timer-button')
const timerInput = document.querySelector('#time')
const movesInput = document.querySelector('#moves')
const summaryContainer = document.querySelector('.summary')
const assignMoves = document.querySelector('#number-of-moves')
const assignTime = document.querySelector('.time')
const restartGame = document.querySelectorAll('#restartGame')
const pairsInputMultimode = document.querySelector('#pairs')
const singleBoxSummary = document.querySelector('.single-box')
const multiplayerBoxSummary = document.querySelector('.multiplayer-box')
const title = document.querySelector('.text-box__title')
const newGame = document.querySelectorAll('#newGame')


let arrayNumbers = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
let arrayIcons = [
	'<i class="fa-solid fa-wheat-awn"></i>',
	'<i class="fa-solid fa-anchor"></i>',
	'<i class="fa-solid fa-worm"></i>',
	'<i class="fa-solid fa-tower-cell"></i>',
	'<i class="fa-solid fa-mountain-sun"></i>',
	'<i class="fa-solid fa-plane-up"></i>',
	'<i class="fa-solid fa-fish-fins"></i>',
	'<i class="fa-solid fa-clover"></i>',
	'<i class="fa-solid fa-mosquito"></i>',
	'<i class="fa-solid fa-oil-well"></i>',
	'<i class="fa-solid fa-cubes-stacked"></i>',
	'<i class="fa-solid fa-bucket"></i>',
	'<i class="fa-solid fa-vault"></i>',
	'<i class="fa-solid fa-shield-dog"></i>',
	'<i class="fa-solid fa-plant-wilt"></i>',
	'<i class="fa-solid fa-road-barrier"></i>',
	'<i class="fa-solid fa-ghost"></i>',
	'<i class="fa-solid fa-chess"></i>',
]
let quantityPlayers = [] // User settings 'numbers of players'
let getSize = [] // User settings 'grid size'
let getTheme = [] // User settings 'select theme'
let randomIconLargeGrid // Generates random Icons in game
let randomIconSmallGrid //
let randomNumberLargeGrid // Generates random Numbers in game
let randomNumberSmallGrid //
let gridID = 0 // adds ID to each created element
let getThemeCheckPair
let counterClicks = 1
let countMoves = 0
let changePlayerAfterMove = 1
let countTimeTimer

// Adds random number to each card
const setRandomNumber = () => {
	const largeGrid = Array(2).fill(arrayNumbers).flat()
	largeGrid.sort(function () {
		return 0.5 - Math.random()
	})
	randomNumberLargeGrid = largeGrid

	let smallGrid = arrayNumbers.slice(0, 8)
	smallGrid = Array(2).fill(smallGrid).flat()
	smallGrid.sort(function () {
		return 0.5 - Math.random()
	})
	randomNumberSmallGrid = smallGrid
}
setRandomNumber()

// Adds random Icon to each card
const setRandomIcon = () => {
	// Icons for large grid size
	const largeGrid = Array(2).fill(arrayIcons).flat()
	largeGrid.sort(function () {
		return 0.5 - Math.random()
	})
	randomIconLargeGrid = largeGrid
	// Icons for small grid size
	let smallArray = arrayIcons.splice(0, 8)
	smallArray = Array(2).fill(smallArray).flat()
	smallArray.sort(function () {
		return 0.5 - Math.random()
	})
	randomIconSmallGrid = smallArray
}
setRandomIcon()

// CHECKS WHERE CURRENTLY THE 'AUTOFOCUS' ATTRIBUTE IS
const check = buttons.forEach(btn => {
	const checkAttribute = e => {
		const currentButton = e.target.parentElement.children
		for (let i = 0; i < currentButton.length; i++) {
			if (currentButton[i].hasAttribute('autofocus', '')) {
				const removeAttribute = currentButton[i].removeAttribute('autofocus')
				const addAttribute = e.target.setAttribute('autofocus', '')
			}
		}
		const currentSettings = document.querySelectorAll('[autofocus]')
		quantityPlayers.push(currentSettings)
		getSize.push(currentSettings)
		getTheme.push(currentSettings)
	}
	btn.addEventListener('click', checkAttribute)
})

// DOWNLOADS CURRENT SETTINGS
const getUserSettings = (quantityPlayers, getSize, getTheme) => {
	const lastSettingUpdate = quantityPlayers.slice(-1)
	const gridArea = getSize.slice(-1)
	const currentTheme = getTheme.slice(-1)
	let arr = []
	currentTheme.forEach(theme => {
		const getRelevantTheme = theme[0].textContent
		arr.push(getRelevantTheme)
		getThemeCheckPair = getRelevantTheme //check Pair function
	})
	lastSettingUpdate.forEach(el => {
		const numberOfPlayers = el[1].textContent
		createsRelevantMode(numberOfPlayers)
		multiplayerMode(numberOfPlayers)
	})
	gridArea.forEach(grid => {
		const getRelevantGrid = grid[2].textContent
		arr.push(getRelevantGrid)
	})
	numberMapSize(arr)
}
// Creates relevant size of map
const numberMapSize = themeSizeArray => {
	const smallGridContainer = document.querySelector('.small-grid-container')
	const largeGridContainer = document.querySelector('.large-grid-container')
	let index = 0
	const gridSmallSize = 16
	const gridBigSize = 36

	if (themeSizeArray[1] == '4x4' && themeSizeArray[0] == 'Numbers') {
		for (let i = 0; i < gridSmallSize; i++) {
			gridID++

			const createCardItem = document.createElement('div')
			createCardItem.classList.add('single-card-box')
			createCardItem.setAttribute('id', `${gridID}`)
			createCardItem.innerHTML = `
			<div class="card">
				<div class="theback"><i class="fa-solid fa-question"></i></div>
				<div class="thefront">${randomNumberSmallGrid[index++]}</div>
			</div>`
			smallGridContainer.appendChild(createCardItem)
			largeGridContainer.classList.add('toggle-large-grid')
		}
	} else if (themeSizeArray[1] == '4x4' && themeSizeArray[0] == 'Icons') {
		for (let i = 0; i < gridSmallSize; i++) {
			gridID++
			const createCardItem = document.createElement('div')
			createCardItem.classList.add('single-card-box')
			createCardItem.setAttribute('id', `${gridID}`)
			createCardItem.innerHTML = `
			<div class="card">
			<div class="theback"><i class="fa-solid fa-question"></i></div>
			<div class="thefront">${randomIconSmallGrid[index++]}</div>
			</div>`
			smallGridContainer.appendChild(createCardItem)
			largeGridContainer.classList.add('toggle-large-grid')
		}
	} else if (themeSizeArray[1] == '6x6' && themeSizeArray[0] == 'Icons') {
		for (let i = 0; i < gridBigSize; i++) {
			const createCardItem = document.createElement('div')
			createCardItem.classList.add('single-card-box')
			createCardItem.setAttribute('id', `${gridID}`)
			createCardItem.innerHTML = `
			<div class="card">
			<div class="theback"><i class="fa-solid fa-question"></i></div>
			<div class="thefront">${randomIconLargeGrid[index++]}</div>
			</div>`

			largeGridContainer.appendChild(createCardItem)
			smallGridContainer.classList.add('toggle-small-grid')
		}
	} else if (themeSizeArray[1] == '6x6' && themeSizeArray[0] == 'Numbers') {
		for (let i = 0; i < gridBigSize; i++) {
			const createCardItem = document.createElement('div')
			createCardItem.classList.add('single-card-box')
			createCardItem.setAttribute('id', `${gridID}`)
			createCardItem.innerHTML = `
			<div class="card">
			<div class="theback"><i class="fa-solid fa-question"></i></div>
				<div class="thefront">${randomNumberLargeGrid[index++]}</div>
				</div>`
			largeGridContainer.appendChild(createCardItem)
			smallGridContainer.classList.add('toggle-small-grid')
		}
	}
}
// CREATES PLAYERS
const multiplayerMode = players => {
	const multiplayerContainer = document.querySelector('.footer-multiplayer')
	let ID_desktop = 1
	let ID_mobile = 1
	let ID = 1
	let playerPairID = 1

	for (let i = 0; i < players; i++) {
		const playerItem = document.createElement('div')
		playerItem.classList.add('multiplayer-box-item')
		playerItem.setAttribute('id', `player${ID++}`)
		playerItem.innerHTML = `
		<div class="player untracked">
			<p class="short-name name">P${ID_mobile++}</p>
			<p class="long-name name">Player ${ID_desktop++}</p>
			<p class="player__pair-number id="pair${playerPairID++}">0</p>
		</div>`
		multiplayerContainer.appendChild(playerItem)
	}
}
const createsRelevantMode = player => {
	const singleplayer = document.querySelector('.footer-single')
	const multiplayer = document.querySelector('.footer-multiplayer')
	if (player == 1) {
		singleplayer.style.display = 'flex'
		multiplayer.style.display = 'none'
		showPopupTimer()
	} else if (player > 1) {
		singleplayer.style.display = 'none'
		multiplayerMode()
		multiplayer.style.display = 'flex'
	}
}
const prepareGame = () => {
	const entireMenu = document.querySelector('.start-game')
	const showGameContent = document.querySelector('.game-content')
	entireMenu.classList.toggle('toggle-start-setup')
	showGameContent.classList.toggle('toggle-game-content')
	getUserSettings(quantityPlayers, getSize, getTheme)
	createsRelevantMode()
}
/////////////////////////////////////// TO MOGE EXPORTOWAĆ
function checkNumberPairs() {
	const cardBox = document.querySelectorAll('.single-card-box .card')
	let wrong = false
	let toggleReverseClasse1, toggleReverseClasse2, firstClick, secondClick

	for (const card of cardBox) {
		function proceed() {
			toggleReverseClasse1.classList.toggle('reverse')
			toggleReverseClasse2.classList.toggle('reverse')
			wrong = false
		}
		function flipOver(e) {
			if (!wrong && getThemeCheckPair == 'Numbers') {
				let element = e.currentTarget

				if (counterClicks == 1) {
					toggleReverseClasse1 = element
					element.classList.add('reverse')
					firstClick = e.currentTarget.textContent
					counterClicks++
				} else if (counterClicks == 2) {
					toggleReverseClasse2 = element
					element.classList.add('reverse')
					secondClick = e.currentTarget.textContent
					counterClicks++
					const firstType = firstClick
					const secondType = secondClick
					if (firstType === secondType) {
						countPairs = 1
						addPairToRelevantPlayer()
						checkWhenGameisOver(cardBox)
						countMoves += 1
						changePlayerAfterMove++
						setTimeout(switchPlayerTurn, 500)
					} else {
						wrong = true
						changePlayerAfterMove++
						setTimeout(switchPlayerTurn, 500)
						setTimeout(proceed, 1000)
						countMoves += 1
					}
					counterClicks = 1
				}
				countMoveQuantity()
			}
		}
		card.addEventListener('click', flipOver)
	}
}
function checkIconPairs() {
	const cardBox = document.querySelectorAll('.single-card-box .card')

	let wrong = false
	let toggleReverseClasse1, toggleReverseClasse2, firstClick, secondClick

	for (const card of cardBox) {
		function proceed() {
			toggleReverseClasse1.classList.toggle('reverse')
			toggleReverseClasse2.classList.toggle('reverse')
			wrong = false
		}
		function flipOver(e) {
			if (!wrong && getThemeCheckPair == 'Icons') {
				let element = e.currentTarget

				if (counterClicks == 1) {
					toggleReverseClasse1 = element
					element.classList.add('reverse')
					firstClick = e.currentTarget.getElementsByTagName('i')[1].className
					counterClicks++
				} else if (counterClicks == 2) {
					toggleReverseClasse2 = element
					element.classList.add('reverse')
					secondClick = e.currentTarget.getElementsByTagName('i')[1].className
					counterClicks++
					if (firstClick == secondClick) {
						console.log('to prawda, równa się')
						countPairs = 1
						addPairToRelevantPlayer()
						checkWhenGameisOver(cardBox)
						countMoves += 1
						changePlayerAfterMove++
						setTimeout(switchPlayerTurn, 500)
					} else {
						wrong = true
						changePlayerAfterMove++

						setTimeout(switchPlayerTurn, 500)
						setTimeout(proceed, 1000)
						console.log('nie równa się')
						countMoves += 1
					}
					counterClicks = 1
				}

				countMoveQuantity()
			}
		}
		card.addEventListener('click', flipOver)
	}
}

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

const checkWhenGameisOver = cards => {
	const players = document.querySelectorAll('.player')
	const reversedCard = document.querySelectorAll('.reverse')
	if (reversedCard.length == cards.length && players.length === 1) {
		showResultSingleMode()
	} else if (reversedCard.length == cards.length && players.length > 1) {
		showResultMultiplayeMode()
		CreatePlayersInSummary(players)
	}
	
}
const showResultSingleMode = () => {
	assignTime.textContent = timerInput.textContent
	assignMoves.textContent = Number(movesInput.textContent) + 1
	clearInterval(countTimeTimer)
	summaryContainer.classList.toggle('show-result')
	multiplayerBoxSummary.classList.add('hide-multiplayer-box')
}

const showResultMultiplayeMode = () => {
	summaryContainer.classList.toggle('show-result')
	singleBoxSummary.classList.add('hide-single-box')
}

const CreatePlayersInSummary = players => {
	const ulList = document.querySelector('.multiplayer-box ul')
	const multiplayerBoxItem = document.getElementsByClassName('pair')
	let index = 0
	let addRelevantPlayer = 0
	let arrayPlayers = []
	for (let i = 0; i < players.length; i++) {
		let eachPlayer = {}
		const player = players[index].children[1].textContent
		const playerPair = players[index].children[2].textContent
		eachPlayer['player'] = player
		eachPlayer['pairs'] = playerPair
		arrayPlayers.push(eachPlayer)
		index++
	}
	arrayPlayers.sort((a, b) => {
		return b.pairs - a.pairs
	})
	const newArray = { ...arrayPlayers }

	for (let i = 0; i < players.length; i++) {
		const newLiItem = document.createElement('li')
		newLiItem.classList.add('multiplayer', 'lost')
		newLiItem.innerHTML = `
		<div class="multiplayer__player ">
		<p class="result-name">${newArray[addRelevantPlayer].player}</p>
		<p><span class="pair">${newArray[addRelevantPlayer].pairs}</span> Pairs</p>
		</div>`
		ulList.appendChild(newLiItem)
		addRelevantPlayer++
	}
	// winnerMultiplayer(multiplayerBoxItem, newArray, arrayPlayers)
	winnerMultiplayer()
	// checkDraw(multiplayerBoxItem, newArray)
}

const winnerMultiplayer =  () => {
	const liList = document.querySelectorAll('.multiplayer')
	const firstPlayerName = document.querySelector('.result-name')
	const playerPair = document.querySelectorAll('.pair')
	const firstWinner = liList[0]
	const firstWinnerPairs = playerPair[0].textContent
	title.textContent = `${firstPlayerName.textContent} wins!`
	firstWinner.classList.toggle('winner')
	firstWinner.classList.toggle('lost')
	let index = 1
	for (let i = 1; i < playerPair.length; i++){
		if(firstWinnerPairs == playerPair[index].textContent){
			const player = playerPair[index].closest('.multiplayer')
			title.textContent = `It's a tie`
			player.classList.toggle('winner')
			player.classList.toggle('lost')
			index++
		}
	}
}
function loadGame() {
	prepareGame()
	checkNumberPairs()
	checkIconPairs() // checkWhichPlayerHasTurn()
	switchPlayerTurn()
}

const restartEntireRound = () => {
	counterClicks = 1
	changePlayerAfterMove = 1
	countMoves = 0
	const cardBox = document.querySelectorAll('.single-card-box')
	const showGameContent = document.querySelector('.game-content')
	const multiplayerContainer = document.querySelectorAll('.footer-multiplayer .multiplayer-box-item')
	const ulListFromSummary = document.querySelectorAll('.multiplayer')
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
}
const setupNewGame = () => {
	window.location.reload()
}
newGame.forEach(btn => btn.addEventListener('click', setupNewGame))
restartGame.forEach(btn => btn.addEventListener('click', restartEntireRound))
btnTimer.addEventListener('click', closeTimerAndStartCount)
start.addEventListener('click', loadGame)
