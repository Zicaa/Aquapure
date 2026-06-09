/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Script conservé, avec une petite sécurité si Bootstrap JS ne charge pas en local.
*/

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const navbarResponsive = document.body.querySelector('#navbarResponsive');

    // Bootstrap normal si le bundle est bien chargé
    if (typeof bootstrap !== 'undefined' && mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Sécurité : si Bootstrap JS ne charge pas, le burger fonctionne quand même.
    if (typeof bootstrap === 'undefined' && navbarToggler && navbarResponsive) {
        navbarToggler.addEventListener('click', () => {
            navbarResponsive.classList.toggle('show');
            const isOpen = navbarResponsive.classList.contains('show');
            navbarToggler.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    // Collapse responsive navbar when toggler is visible
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                if (typeof bootstrap !== 'undefined') {
                    navbarToggler.click();
                } else if (navbarResponsive) {
                    navbarResponsive.classList.remove('show');
                    navbarToggler.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

});


// Bannière cookies techniques
window.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.querySelector('#cookieBanner');
    const acceptCookies = document.querySelector('#acceptCookies');

    if (!cookieBanner || !acceptCookies) {
        return;
    }

    const storageKey = 'aquapureCookiesInfoAccepted';

    if (localStorage.getItem(storageKey) !== 'true') {
        cookieBanner.classList.add('is-visible');
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem(storageKey, 'true');
        cookieBanner.classList.remove('is-visible');
    });
});
