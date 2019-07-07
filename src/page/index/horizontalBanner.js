import $ from 'jquery'
import {
    initSwiper
} from '../../utils/initSwiper'
const imgs = [
    [{
        "url": "img/index_img/ia_10108.jpg",
        "title": "东方双狮",
        "dis": 6.2,
        "ogl": 2730,
        "sell": 1692
    }, {
        "url": "img/index_img/ia_10109.jpg",
        "title": "梅花",
        "dis": 6.5,
        "ogl": 9900,
        "sell": 6435
    }, {
        "url": "img/index_img/ia_10110.jpg",
        "title": "迪士尼",
        "dis": 5.7,
        "ogl": 229,
        "sell": 129
    }],
    [{
        "url": "img/index_img/ia_10110.jpg",
        "title": "迪士尼",
        "dis": 5.7,
        "ogl": 229,
        "sell": 129
    }, {
        "url": "img/index_img/ia_10111.jpg",
        "title": "天铭",
        "dis": 6,
        "ogl": 4200,
        "sell": 2520
    }, {
        "url": "img/index_img/ia_10112.jpg",
        "title": "飞亚达",
        "dis": 6.9,
        "ogl": 1380,
        "sell": 949
    }, {
        "url": "img/index_img/ia_10113.jpg",
        "title": "威利默克",
        "dis": 4.3,
        "ogl": 2280,
        "sell": 980
    }, {
        "url": "img/index_img/ia_10114.jpg",
        "title": "雪铁纳",
        "dis": 7.8,
        "ogl": 5350,
        "sell": 4173
    }, {
        "url": "img/index_img/ia_10116.jpg",
        "title": "法斯蒂纳",
        "dis": 6.6,
        "ogl": 2590,
        "sell": 1689
    }],
    [{
        "url": "img/index_img/ia_10117.jpg",
        "title": "玛莎拉蒂",
        "dis": 6.6,
        "ogl": 5680,
        "sell": 3699
    }, {
        "url": "img/index_img/ia_10118.jpg",
        "title": "ANICORN",
        "dis": 6.4,
        "ogl": 2980,
        "sell": 1899
    }, {
        "url": "img/index_img/ia_10115.jpg",
        "title": "天铭",
        "dis": 6,
        "ogl": 4200,
        "sell": 2520
    }]
]

function horizontalBanner(data) {
    let template = `<div class="swiper-wrapper">`

    for (let i = 0; i < data.length; i++) {
        template += `<div class="swiper-slide">`
        for (let j = 0; j < data[i].length; j++) {
            template += `<img src=${data[i][j].url} alt="" />
                            <div>
                            <p>${data[i][j].title}</p>
                            <p>
                                <span class="sp1">${data[i][j].dis}</span>
                                <span class="sp2">${data[i][j].sell}</span>
                            </p>
                            <p>${data[i][j].ogl}</p>
                            </div>`
        }
        template += `</div>`
    }

    template += `</div>
        <!--按钮-->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!--分页-->
        <div class="swiper-pagination"></div>`
    return template
}



function runderHorizontalBanner() {
    const template = horizontalBanner(imgs)
    $('#horizontal-swiper-container').html(template)
    initSwiper('horizontal-swiper-container')
}

export {
    runderHorizontalBanner
}