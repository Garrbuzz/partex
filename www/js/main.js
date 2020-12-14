document.addEventListener('DOMContentLoaded', function() {
    var elemsSlider = document.querySelector('.carousel');
    var instances = M.Carousel.init(elemsSlider);

    var elems1 = document.querySelectorAll('.collapsible');
    var instances1 = M.Collapsible.init(elems1);

    let la = document.querySelector('#left-arrow');

    let ra = document.querySelector('#right-arrow');
    if (la && ra) {
        la.addEventListener("click", () => { instances.prev() });
        ra.addEventListener('click', () => { instances.next() });
    }
});

//modal
let itemId = '';
let itemPrice = '';
let itemName = '';
let itemArticle = '';

let numMinus = function() {
    let numGoods = document.querySelector('#goods-count');
    let goodsCount = document.querySelector('.to-cart-modal-content input[name=shk-count]');
    let value = parseInt(numGoods.value);
    if (value > 1) {
        value--;
        goodsCount.value = value;
        numGoods.value = value;

    }
}
let numPlus = function() {
    let numGoods = document.querySelector('#goods-count');
    let goodsCount = document.querySelector('.to-cart-modal-content input[name=shk-count]');
    let value = parseInt(numGoods.value);

    value++;
    goodsCount.value = value;
    numGoods.value = value;

    // console.log(numGoods.value);

}
let getInfoForModal = function(e) {

    let numGoods = document.querySelector('#goods-count');
    let goodsCount = document.querySelector('.to-cart-modal-content input[name=shk-count]');
    let target = event.target;
    if (target.className == 'to-cart-image') {
        goodsCount.value = '1';
        numGoods.value = '1';
        itemId = target.dataset.id;
        itemPrice = target.dataset.price + ' грн.';
        itemName = target.dataset.name;
        itemArticle = target.dataset.article;
    }
    let modalPrice = document.querySelector('#modal-price');
    let modalName = document.querySelector('#modal-name');
    let modalArticle = document.querySelector('#modal-article');
    let modalId = document.querySelector('.to-cart-modal-content input[name=shk-id]');
    let modalInputName = document.querySelector('.to-cart-modal-content input[name=shk-name]');
    modalId.value = itemId;
    modalInputName.value = itemName;
    modalName.innerHTML = itemName;
    modalArticle.innerHTML = itemArticle;
    modalPrice.innerHTML = itemPrice;
    // console.log(modalInputName.value);

    //кількість товару
    let minusButton = document.querySelector('#minus');
    let plusButton = document.querySelector('#plus');
    let numInput = document.querySelector('#goods-count');
    numInput.addEventListener('input', () => {
        let goodsCount = document.querySelector('.to-cart-modal-coірлntent input[name=shk-count]');
        goodsCount.value = numInput.value;

    });

    minusButton.addEventListener('click', numMinus);
    plusButton.addEventListener('click', numPlus);


    //кількість товару end
}


document.addEventListener('DOMContentLoaded', function() {
    let selectionsWrapper = document.querySelector('.b2b-selection-wrapper');
    if (selectionsWrapper) {
        selectionsWrapper.addEventListener('click', getInfoForModal);
        let elemsModal = document.querySelectorAll('.modal');
        let instances = M.Modal.init(elemsModal);
        let addButton = document.querySelector('#add-button');
        addButton.addEventListener('click', () => {
            instances[0].close()
        });
    }

    let sendOrderButton = document.querySelector('#send');

    if (sendOrderButton) {
        sendOrderButton.addEventListener('click', () => window.open("b2b/"));

    }




});
//end modal
//goods
let productCardRight = document.querySelector('.product-card-right');
if (productCardRight) {
    productCardRight.addEventListener('click', addGoods);
}

function addGoods() {

    let minusButton = document.querySelector('#minus');
    let plusButton = document.querySelector('#plus');

    minusButton.addEventListener('click', numMinus);
    plusButton.addEventListener('click', numPlus);
}
//goods end