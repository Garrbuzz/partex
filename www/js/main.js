document.addEventListener('DOMContentLoaded', function() {
    let options = {
        duration: 180,
        dist: -150,
        shift: 0,
        padding: 0,
        fullWidth: false,
        indicators: true,
        noWrap: false


    }
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});