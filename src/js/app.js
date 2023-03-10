const buttons = document.querySelectorAll('.button-box button ')
const start = document.querySelector('.button-box__button--primary')

let quantityPlayers = [] // User settings 'numbers of players'
let getSize = [] // User settings 'grid size'
let getTheme = [] // User settings 'select theme'
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
let randomIconLargeGrid
let randomIconSmallGrid
let randomNumberLargeGrid
let randomNumberSmallGrid
let gridID = 0

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

const setRandomIcon = () => {
	// Icons for large grid size
	const array = Array(2).fill(arrayIcons).flat()
	array.sort(function () {
		return 0.5 - Math.random()
	})
	randomIconLargeGrid = array
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

const numberMapSize = themeSizeArray => {
	const smallGridContainer = document.querySelector('.small-grid-container')
	const largeGridContainer = document.querySelector('.large-grid-container')
	let index = 0
	const gridSmallSize = 16
	const gridBigSize = 36

	if (themeSizeArray[1] == '4x4' && themeSizeArray[0] == 'Numbers') {
		for (let i = 0; i < gridSmallSize; i++) {
			gridID++
			const gridCell = document.createElement('div')
			gridCell.classList.add('grid')
			gridCell.setAttribute('id', `${gridID}`)
			gridCell.innerHTML = `${randomNumberSmallGrid[index++]}`
			smallGridContainer.appendChild(gridCell)
		}
	} else if (themeSizeArray[1] == '4x4' && themeSizeArray[0] == 'Icons') {
		for (let i = 0; i < gridSmallSize; i++) {
			gridID++
			const gridCell = document.createElement('div')
			gridCell.classList.add('grid')
			gridCell.setAttribute('id', `${gridID}`)
			gridCell.innerHTML = `${randomIconSmallGrid[index++]}`
			smallGridContainer.appendChild(gridCell)
		}
	} else if (themeSizeArray[1] == '6x6' && themeSizeArray[0] == 'Icons') {
		for (let i = 0; i < gridBigSize; i++) {
			const gridCell = document.createElement('div')
			gridID++
			gridCell.classList.add('grid')
			gridCell.setAttribute('id', `${gridID}`)
			gridCell.innerHTML = `${randomIconLargeGrid[index++]}`
			largeGridContainer.appendChild(gridCell)
		}
	} else if (themeSizeArray[1] == '6x6' && themeSizeArray[0] == 'Numbers') {
		for (let i = 0; i < gridBigSize; i++) {
			const gridCell = document.createElement('div')
			gridID++
			gridCell.classList.add('grid')
			gridCell.setAttribute('id', `${gridID}`)
			gridCell.innerHTML = `${randomNumberLargeGrid[index++]}`
			largeGridContainer.appendChild(gridCell)
		}
	}
}

const multiplayerMode = players => {
	const multiplayerContainer = document.querySelector('.footer-multiplayer')
	let ID_desktop = 1
	let ID_mobile = 1

	for (let i = 0; i < players; i++) {
		const playerItem = document.createElement('div')
		playerItem.classList.add('box-item')
		playerItem.innerHTML = `
		<div class="player untracked ">
		<div class="target-turn"></div>
		<p class="short-name">P${ID_mobile++}</p>
		<p class="long-name">Player ${ID_desktop++}</p>
		<p class="player__pair-number ">4</p>
		</div>
		`
		multiplayerContainer.appendChild(playerItem)
	}
}
const createsRelevantMode = player => {
	const singleplayer = document.querySelector('.footer-single')
	const multiplayer = document.querySelector('.footer-multiplayer')
	if (player == 1) {
		singleplayer.style.display = 'flex'
		multiplayer.style.display = 'none'
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

















const checkEachCard = () => {
	const gridItem = document.querySelectorAll('.grid')
	gridItem.forEach(item => {
		 
		const targetCard = e => {
			console.log(e.target.textContent);
			
			
		}

		item.addEventListener('click', targetCard)
	})
}


const gridItem = document.querySelectorAll('.grid')



gridItem.forEach(item => {
	const rotate = e => {
    e.target.style.animation = 'spin2 4s linear infinite'
		// console.log(item.getElementsByTagName('i')[0]);
		// console.log(item.classList.add('rotate-card'));

		console.log(item);
	}

	item.addEventListener('click', rotate)
})










//uruchamiamy wszystko w kolejnosci
function loadGame (){
	prepareGame()
	checkEachCard()
}

start.addEventListener('click', loadGame)
