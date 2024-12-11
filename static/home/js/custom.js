function updateActiveClass() {
    let mainNavLinks = document.querySelectorAll('.mil-main-menu a');
    let footerNavLinks = document.querySelectorAll('.mil-footer-menu a');

    mainNavLinks.forEach(link => {
        let parentLi = link.parentElement;
        if (link.href === window.location.href) {
            parentLi.classList.add('mil-active');
        } else {
            parentLi.classList.remove('mil-active');
        }
    });

    footerNavLinks.forEach(link => {
        let parentLi = link.parentElement;
        if (link.href === window.location.href) {
            parentLi.classList.add('mil-active');
        } else {
            parentLi.classList.remove('mil-active');
        }
    });
}

document.addEventListener('DOMContentLoaded', updateActiveClass);

let observer = new MutationObserver(updateActiveClass);

observer.observe(document, {childList: true, subtree: true});