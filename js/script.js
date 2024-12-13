$(document).ready(function () {
    $('#hamburger-menu').on('click', function () {
        $('#nav-menu').toggleClass('active');
    });
});

// LOGO LEGO CAMBIO IMAGEN
var logo = $("#logolego");

logo.hover(
    function() {
    $(this).attr("src", "img/LEGO_logo.svg.png");
    },
    function() {
        $(this).attr("src", "img/logo_navidad.jpg");
    }
);

