var menuBtn = document.getElementById('menu')
var navLinks = document.getElementById('navLinks')
var closeBtn = document.getElementById('closeNavLinks')
menuBtn.addEventListener('click', () => {
    navLinks.style.visibility = 'visible'
    navLinks.style.opacity = 1
    navLinks.style.right = 0

})

closeBtn.addEventListener('click', () => {
    navLinks.style.visibility = 'hidden'
    navLinks.style.opacity = 0
})
