(() => {
    $('header').load('html/component/header.html')
    $('#watch_info').load('html/index/wristwatch.info.html');
    $('#shareMise').load('html/index/share.html');
    $('#shareMise').load('html/index/share.html');
    $('footer').load('html/index/footer.html');
    $('#side-bar').load('html/component/bar.html', () => {
        //侧栏
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
    $('#navigation').load('html/component/nav.html', () => {
        //吸顶
        let nav = document.getElementById('navigation');
        let ulmenu = document.getElementById('ulmenu');
        let navTop = nav.offsetTop;
        console.log(navTop)
        window.onscroll = function () {
            let scrollTop = window.scrollY;
            if (scrollTop >= navTop) {
                nav.className = 'navi';
                ulmenu.style.display = 'none';
            } else {
                nav.className = '';
                ulmenu.style.display = 'block';

            }
        }

    });
})();