import $ from 'jquery'
import {
    initSwiper
} from '../../utils/initSwiper'
const imgs = [
    'index_img/ia_1.jpg',
    'index_img/ia_2.jpg',
    'index_img/ia_3.jpg',
    'index_img/ia_4.jpg',
    'index_img/ia_5.jpg',
    'index_img/ia_6.jpg'
]
const basePath = '../src/img/'

function mainBanner(data) {
    let template = `<div class="swiper-wrapper">`
    for (let i = 0; i < data.length; i++) {
        template += `<div class="swiper-slide">
            <img src=${basePath+data[i]} alt="" />
        </div>`
    }

    template += `</div>
        <!--按钮-->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!--分页-->
        <div class="swiper-pagination"></div>`
    return template
}



function renderdMainBanner() {
    const template = mainBanner(imgs)
    $("#main-swiper-container").html(template)
    initSwiper('main-swiper-container')
}


export {
    renderdMainBanner
}