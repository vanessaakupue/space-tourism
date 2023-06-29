const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.style.display = "block";
    closeIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
});

closeIcon.addEventListener('click', () => {
    hamburgerMenu.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
});

const links = document.querySelectorAll('.menu a');

const getCurrentRoute = () => {
const currentURL = window.location.href; // Get the current URL
const route = currentURL.substring(currentURL.lastIndexOf("/") + 1); // Extract the route from the URL

      
return route;
}

const addStyle = (element) => {
    element.style.color = 'white';
    element.style.borderBottom = '2px solid white'
    element.style.height = '100%'
    element.style.lineHeight = '7'
}

links.forEach((link, index) => {
    const routes = ['index', 'destination', 'crew', 'technology'];
    const currentRoute = getCurrentRoute();
    
    if (currentRoute.includes(routes[index])) addStyle(link);
});


