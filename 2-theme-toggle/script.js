const DARK_CLASS = 'dark'
const themeToggleButton = document.querySelector('.js-theme-toggle-button')
const sunMoonContainer = document.querySelector('.sun-moon-container')

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle(DARK_CLASS)
  currentRotation = parseInt(getComputedStyle(sunMoonContainer)
  .getPropertyValue('--rotation'))

  console.log(currentRotation)
  sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
})