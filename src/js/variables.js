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
const mobileMenuBtn = document.querySelector('.nav__menu-mobile')
const mobileMenu = document.querySelector('.menu')
const resumeBtn = document.querySelector('#resumeGame')

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
