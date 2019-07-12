(() => {
    $("header").load("component/header.html");
    $("#navigation").load("component/nav.html", () => {
        let navigation = document.getElementById("navigation");
        let ulmenu = document.getElementById("ulmenu");
    });
    $("footer").load("index/footer.html");
    $('#side-bar').load('component/bar.html', function () {
        //侧栏
        //回到顶部
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
})();