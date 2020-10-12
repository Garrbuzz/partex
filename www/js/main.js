document.addEventListener('DOMContentLoaded', function() {
    // let options = {
    //     // duration: 180,
    //     // dist: -150,
    //     // shift: 0,
    //     // padding: 0,
    //     // fullWidth: false,
    //     // indicators: true,
    //     // noWrap: false



    // }

    var elems = document.querySelector('.carousel');
    var instances = M.Carousel.init(elems);
    let la = document.querySelector('#left-arrow');
    console.log(la);
    let ra = document.querySelector('#right-arrow');
    la.addEventListener("click", () => { instances.prev() });
    ra.addEventListener('click', () => { instances.next() });
});