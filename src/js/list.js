(function () {
    let apage = 1; //一页
    let num = 20; //一页20条数据
    let sort = ''; //排序

    $.ajax({
        type: 'get',
        url: '../api/list.php',
        data: 'page=' + apage + '&num=' + num,
        success: str => {
            let arr = JSON.parse(str);
            init(arr);
        }

    });

    function init(arr) {
        let wb_goods = document.getElementById('wb_goods');
        let pages = document.getElementById('pages');

        let render = arr.data.map(item => {
            return `<li data-id="${item.gid}">
                            <a href="###">
                                <img src="${item.urlImg}" alt="">
                            </a>
                            <div class="goods_txt">
                                <p class="p1_txt">
                                    <em>月付</em>
                                    <span class="installment">${item.inst}</span>
                                    <span class="price">￥${item.price}</span>
                                </p>
                                <a class="tit" href="###">${item.title}</a>
                                <p class="sales">
                                    <span>${item.sales}</span>
                                    <em> / 销量${item.s_shop}</em>
                                </p>
                                <a class="shopName" href="###">${item.cost}</a>
                                <p class="free">
                                    <span>免息分期</span>
                                </p>
                                <div class="collect">
                                    <a class="add_keep" href="###">加入收藏</a>
                                    <a class="add_cart" href="###">加入购物车</a>
                                </div>
                            </div>
                    </li>`;
        }).join('');

        wb_goods.innerHTML = render;

        //总页数生成页码
        let apages = Math.ceil(arr.pages / arr.num);
        console.log(arr.pages);
        let pagebtn = '';
        for (let i = 0; i < apages; i++) {
            pagebtn += `<span>${i + 1}</span>`;
        }
        pages.innerHTML = pagebtn;
        pages.children[apage - 1].className = 'active';

    }


    pages.onclick = ev => {
        if (ev.target.tagName.toLowerCase() == 'span') {
            apage = ev.target.innerHTML;
            init();
        }
    }
    let isok = true;
    $('#cost').on('click', function () {
        // console.log(666);

        if (isok) {
            $('#cost').html('价格高到低');
            sort = 'DESC';
            isok = !isok;
        } else {
            $('#cost').html('价格低到高');

            sort = 'ASC';
            isok = !isok;
        }

        $.ajax({
            type: 'get',
            url: 'http://www.wanbiao.com/src/api/paixu.php',
            data: 'sort=' + sort + '&page=' + apage + '&num=' + num,
            success: str => {
                let arr = JSON.parse(str);
                // console.log(arr);
                init(arr);
            }
        });
    })

    //点击跳转详情页

    $('#wb_goods').on('click', 'li', function () {
        let gid = $(this).attr('data-id');
        // console.log(gid)
        window.open('http://www.wanbiao.com/src/html/details.html?gid=' + gid);
    })

    //左侧 栏
    $('#watch_information .tab_info').on('mouseover', 'li', function () {
        $(this).attr('class', 'active')
            .siblings()
            .attr('class', '');
        // console.log($(this).index());
        $('.wb_tab').eq($(this).index())
            .css('display', 'block').siblings().css('display', 'none')

    });


})();