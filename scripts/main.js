function addHoverEffect() {
    var logoImage = document.getElementsByClassName('logo-image')[0];
    logoImage.addEventListener('mouseenter', function() {
        logoImage.src = '/images/uppervalleyjs2.png';
    });

    logoImage.addEventListener('mouseleave', function() {
        logoImage.src = '/images/uppervalleyjs1.png';
    });
};

function load() {
    addHoverEffect();
};

window.onload = load;
