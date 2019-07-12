(() => {
    $('header').load('html/component/header.html', function () {
        let cart = document.getElementById('cart');
        let bar = document.getElementById('side-bar');
        cart.onclick = function () {
            console.log(666)
        }
    })
    $('#watch_info').load('html/index/wristwatch.info.html');
    $('#shareMise').load('html/index/share.html');
    $('#shareMise').load('html/index/share.html');
    $('footer').load('html/index/footer.html');
    $('#side-bar').load('html/component/bar.html', () => {
        //侧栏
        $('#soTop').on('click', function () {
            window.scrollTo({
                top: 0,
                behavior: "auto"
            });
        })
        $('#openCart').on('click', function () {
            $('.shoppingCart').css('right', '0');
            $('#side-bar').css('right', '0');
            $('#barUl').css('right', '277px');
        })
        $('#close').on('click', function () {
            $('.shoppingCart').css('right', '-279px');
            $('#side-bar').css('right', '-279px');
            $('#barUl').css('right', '0');
        })
        $('#collect').on('click', function () {
            $('.shoppingCart').css('right', '0');
            $('#side-bar').css('right', '0');
            $('#barUl').css('right', '277px');
            $('#cartCon').html('我的收藏');
        })
        $('#pastRecords').on('click', function () {
            $('.shoppingCart').css('right', '0');
            $('#side-bar').css('right', '0');
            $('#barUl').css('right', '277px');
            $('#cartCon').html('浏览足迹');
        })

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