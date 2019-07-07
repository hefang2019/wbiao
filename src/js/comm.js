//限时购
function settime() {
    let timer = setInterval(settime, 1000);
    let endtime = '2019-08-01 9:50:52'; //设置终止时间
    let nowtime = Date.now(); //获取现在时间，纪元时间
    //终止时间到现在时间的毫秒数  终止时间转换成纪元时间，
    let dis = (Date.parse(endtime) - nowtime) / 1000;

    if (dis <= 0) {
        stopwatch.innerHTML = `<p>
                                距离本期结束
                                <i>00</i>
                                <em>天</em>
                                <i>00</i>
                                <em>时</em>
                                <i>00</i>
                                <em>分</em>
                                <i>00</i>
                                <em>秒</em>
                            </p>`;
        clearInterval(timer);
    } else {
        let obj = second(dis);
        let html = `<p>
                        距离本期结束
                        <i>${obj.days}</i>
                        <em>天</em>
                        <i>${obj.hours}</i>
                        <em>时</em>
                        <i>${obj.mins}</i>
                        <em>分</em>
                        <i>${obj.secs}</i>
                        <em>秒</em>
                    </p>`;
        let limited = document.getElementById('limited');
        let stopwatch = limited.querySelector('.stopwatch');
        stopwatch.innerHTML = html;
    }
}


//毫秒转成天 时 分 秒 
function second(num) {
    let sec = parseInt(num % 60); //秒
    let min = parseInt(num / 60) % 60; //分
    let hour = parseInt(num / 60 / 60) % 24; //时
    let day = parseInt(num / 60 / 60 / 24); //天
    return {
        days: day,
        hours: hour,
        mins: min,
        secs: sec
    }
}
//限时购轮播图
let specials = document.getElementById('specials');

function init() {
    $.ajax({
        type: 'get',
        url: 'api/vi.json',
        data: '',
        success: str => {
            // console.log(str);
            let render = str.map(item => {
                return `<li>
                <a href="###">
                <img src="${item.url}">
                <div class="discountedPrice">
                  <p class="p1">${item.title}</p>
                  <p class="p2">
                    <i>${item.dis}折</i>
                    <span>${item.sell}</span>
                  </p>
                  <del>¥${item.ogl}</del>
                </div>
              </a>
              </li>`;
            }).join('');
            specials.innerHTML = render;
        }
    });
}
init();

export {
    settime
}