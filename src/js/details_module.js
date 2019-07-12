(function () {
    $('header').load('component/header.html');
    $("#side-bar").load('component/bar.html', function () {
        let bar = document.getElementById('side-bar');
        let on_off = bar.querySelector('.cart i');
        let shopcart = bar.querySelector('.shoppingCart');
        let barUl = document.getElementById('barUl');
        let alis = barUl.querySelectorAll('li');

        on_off.onclick = function () {
            shopcart.style.right = -279 + 'px';
            bar.style.right = -279 + 'px';
            barUl.style.right = 0;
        }
        for (let i = 0; i < alis.length; i++) {
            alis[i].onclick = function () {
                shopcart.style.right = 0;
                bar.style.right = 0;
                barUl.style.right = 279 + 'px';
            }
        }
    });
    $('footer').load('index/footer.html');
    $('#navigation').load('component/nav.html', function () {
        let nav = document.getElementById('navigation');
        let menu = navigation.querySelector('.com-menu');
        let ulmenu = document.getElementById('ulmenu');
        menu.style.display = 'none';
        ulmenu.style.display = 'none';
    });
})();