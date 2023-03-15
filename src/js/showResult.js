
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
}
const winnerMultiplayer = () => {
	const liList = document.querySelectorAll('.multiplayer')
	const firstPlayerName = document.querySelector('.result-name')
	const playerPair = document.querySelectorAll('.pair')
	const firstWinner = liList[0]
	const firstWinnerPairs = playerPair[0].textContent
	title.textContent = `${firstPlayerName.textContent} wins!`
	firstWinner.classList.toggle('winner')
	firstWinner.classList.toggle('lost')
	let index = 1
	for (let i = 1; i < playerPair.length; i++) {
		if (firstWinnerPairs == playerPair[index].textContent) {
			const player = playerPair[index].closest('.multiplayer')
			title.textContent = `It's a tie`
			player.classList.toggle('winner')
			player.classList.toggle('lost')
			index++
		}
	}
}