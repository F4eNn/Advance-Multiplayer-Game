
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
			if (!wrong && getThemeCheckPair == 'Numbers' && !card.classList.contains('reverse')) {
				let element = e.currentTarget
				element.classList.toggle('reverse')

				if (counterClicks == 1) {
					toggleReverseClasse1 = element
					firstClick = e.currentTarget.textContent
					counterClicks = 2
				} else if (counterClicks == 2) {
					toggleReverseClasse2 = element
					secondClick = e.currentTarget.textContent
					if (firstClick == secondClick) {
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
			if (!wrong && getThemeCheckPair == 'Icons' && !card.classList.contains('reverse')) {
				let element = e.currentTarget
				element.classList.toggle('reverse')

				if (counterClicks == 1) {
					toggleReverseClasse1 = element
					firstClick = e.currentTarget.getElementsByTagName('i')[1].className
					counterClicks = 2
				} else if (counterClicks == 2) {
					toggleReverseClasse2 = element
					secondClick = e.currentTarget.getElementsByTagName('i')[1].className
					if (firstClick == secondClick) {
						console.log('to prawda, równa się')
						countPairs = 1
						addPairToRelevantPlayer()
						checkWhenGameisOver(cardBox)
						countMoves += 1
						changePlayerAfterMove++
						setTimeout(switchPlayerTurn, 400)
					} else {
						wrong = true
						changePlayerAfterMove++

						setTimeout(switchPlayerTurn, 400)
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
