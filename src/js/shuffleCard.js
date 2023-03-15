
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