
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