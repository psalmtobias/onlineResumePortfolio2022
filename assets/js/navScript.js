const toggleButton = document.getElementsByClassName('pj-toggle-button')[0]
const navbarLinks = document.getElementsByClassName('pj-navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})