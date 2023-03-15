
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