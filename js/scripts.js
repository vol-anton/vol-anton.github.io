/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume) ******EDITED*******
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });



    // toggle dark mode
    const checkbox = document.getElementById('checkbox');

    let changeText = document.querySelectorAll('.changeText');
    
    checkbox.addEventListener('change', ()=>{
        document.body.classList.toggle('darkbg');
        for (let i = 0; i < changeText.length; i++) {

            changeText[i].classList.toggle('lightText');
        }
    });


    // hover over profile pick
    $profilePic = document.getElementById('profilePic');
    $yo = document.getElementById('yo');

    $profilePic.addEventListener("mouseover", (e) => {
        setTimeout(function() { $yo.style.display = 'block'; }, 700);
    });

    $profilePic.addEventListener("mouseout", (e) => {
        $yo.style.display = 'none';
    });




});
