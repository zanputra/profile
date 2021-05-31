/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //validate if all variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            //show navbar
            nav.classList.toggle('show')
            toggle.classList.toggle('fa-times')
        })
    }
}

showNavbar('nav-toggle', 'nav-bar');

/* Current Active*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))