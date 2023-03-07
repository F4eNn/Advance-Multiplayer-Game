const buttons = document.querySelectorAll('.button-box button ')
const autofocus = document.querySelectorAll('[autofocus]')


buttons.forEach(btn => {

	const checkAttribute = e => {
		const currentButton = e.target.parentElement.children
        // const theme = e.target.textContent
        // const players = e.target.textContent
        // const size = e.target.textContent
        // console.log(e.target.parentElement.children);
        
        for(let  i = 0; i< currentButton.length; i++){
            
            if(currentButton[i].hasAttribute('autofocus','')){
                const removeAttribute = currentButton[i].removeAttribute('autofocus')
                const addAttribute = e.target.setAttribute('autofocus', '')
            }
            const currentButton2 = currentButton[i].
            getUserSettings(currentButton2)
            // console.log(currentButton[i].textContent);
        }
	}

	btn.addEventListener('click', checkAttribute)
})

const getUserSettings = (theme, players, size) => {
    console.log(theme);
    // console.log(players);
    // console.log(size);

}
document.addEventListener('click', getUserSettings)