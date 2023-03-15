
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