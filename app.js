const navToggle = document.getElementById('toggle-button')
const navlinks = document.getElementsByClassName('nav-links')[0];

navToggle.addEventListener( 'click' ,() =>{
    navlinks.classList.toggle('active')
    // alert('hello')
})