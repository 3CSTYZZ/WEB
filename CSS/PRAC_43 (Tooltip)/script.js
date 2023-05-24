const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');

Popper.createPopper(button, tooltip, {
	placement: 'top',
});