(function () {
    let gid = location.href;
    // console.log(gid);
    let data = strToObj(gid);
    console.log(data);
    $.ajax({
        type: 'get',
        url: 'http://www.wanbiao.com/src/api/details.php',
        data: 'gid=' + data.gid,
        success: str => {
            let arr = JSON.parse(str);
            // console.log(arr);
            let render = arr.map(item => {
                return `<div class="m_top">
                    <div class="m_top_con">
                      <div class="m_top_left">
                        <p>
                          首页 > 天梭 > 【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列
                          T006.407.16.033.00 自动机械男表
                        </p>
                      </div>
                      <div class="m_top_right">
                        <span>自营</span>
                        <a href="###">${item.cost}</a>
                        <b>|</b>
                        <em>+关注</em>
                      </div>
                    </div>
                  </div>
                  <div id="wb_main">
                    <div class="content">
                      <div class="goodsdate">
                        <div class="gdImg">
                          <div id="bg_img">
                            <img src="${item.urlImg}" alt="" />
                          </div>
                          <div id="min_img">
                            <a id="prev" href="###"></a>
                            <ul>
                              <li>
                                <img class="opci" src="../img/dateils_img/1 - resize,m_pad,w_480,h_480,color_ffffff.jpg" alt="" />
                              </li>
                              <li>
                                <img src="../img/dateils_img/3 - resize,m_pad,w_480,h_480,color_ffffff.jpg" alt="" />
                              </li>
                              <li>
                                <img src="../img/dateils_img/4 - resize,m_pad,w_480,h_480,color_ffffff.jpg" alt="" />
                              </li>
                              <li>
                                <img src="../img/dateils_img/5 - resize,m_pad,w_480,h_480,color_ffffff.jpg" alt="" />
                              </li>
                              <li>
                                <img src="../img/dateils_img/6 - resize,m_pad,w_480,h_480,color_ffffff.jpg" alt="" />
                              </li>
                              <li>
                                <img src="../img/dateils_img/7 - resize,m_pad,w_480,h_480,color_ffffff.jpg" alt="" />
                              </li>
                            </ul>
                            <a id="next" href="###"></a>
                          </div>
                          <div class="share">
                            <span>收藏</span>
                            <em>分享</em>
                          </div>
                        </div>
                        <div class="confgt">
                          <div class="tit">
                            <b>${item.title}</b>
                          </div>
                          <div class="notice">
                            <p>
                              机芯稳定性、精度、动力储存全面提升
                              力洛克T41.1.423.33全新升级版<span>了解更多</span>>>
                            </p>
                          </div>
                          <div class="goodsid">
                            <ul>
                              <li>型号:T006.407.16.033.00</li>
                              <li>编号:62518</li>
                              <li>品牌:天梭</li>
                              <li>销量:${item.s_shop}</li>
                            </ul>
                          </div>
                          <ul class="goods_price">
                            <li class="f1">
                              <span class="sp1">分期</span>
                              <p><b>￥</b>${item.inst}<em>x12期</em></p>
                              <span class="sp2">
                                <i></i>
                                免息免手续费
                              </span>
                            </li>
                            <li class="f2">
                              <span class="sp3">万表价</span>
                              <b>${item.price}</b>
                              <span class="sp4">市场价 ￥4,200</span>
                            </li>
                            <li class="f3">
                              <span>领卷</span>
                              <a class="coupon" href="###">￥100 毕业季现金卷</a>
                              <a class="more" href="###">更多</a>
                            </li>
                          </ul>
                          <div class="dispatching">
                            配送 &nbsp;&nbsp;&nbsp;
                            <p>
                              <span>（顺丰包邮）</span>
                              16:45前支付，预计1-3个工作日内发货，支持货到付款
                            </p>
                          </div>
                          <div class="promise">
                            <div class="p_txt">承诺</div>
                            <ul>
                              <li class="left_f1">
                                <a href="###"><em>.</em>正品保障</a>
                                <a href="###"><em>.</em>正规发票</a>
                                <a href="###"><em>.</em>假一赔三</a>
                                <a href="###"><em>.</em>7天退换</a>
                                <a href="###"><em>.</em>全球联保</a>
                                <a href="###"><em>.</em>免息分期</a>
                                <a href="###"><em>.</em>实体店体验</a>
                              </li>
                              <li class="right_f2">
                                <a href="###"><em>.</em>闪电发货</a>
                                <a href="###"><em>.</em>货到付款</a>
                              </li>
                            </ul>
                          </div>
                          <div class="serve">
                            <span>服务</span>
                            <a class="s_t1" href="###">“特惠” 购表延保服务
                              <i></i>
                            </a>
                            <a class="s_t2" href="###">100%正品二手表库
                              <i></i>
                            </a>
                          </div>
                          <div class="style">
                            <div class="kunshi">款式</div>
                            <div class="select">
                              <a href="###">
                                <img src="../img/dateils_img/9 - resize,w_50,h_50.jpg" alt="" />
                                <span>钢 黑色 PVD镀金 不锈钢</span>
                              </a>
                              <a href="###">
                                <img src="../img/dateils_img/10 - resize,w_50,h_50.jpg" alt="" />
                                <span>真皮 其他</span>
                              </a>
                              <a href="###">
                                <img src="../img/dateils_img/11 - resize,w_50,h_50.jpg" alt="" />
                                <span>真皮 黑色 牛皮</span>
                              </a>
                              <a href="###">
                                <img src="../img/dateils_img/12 - resize,w_50,h_50.jpg" alt="" />
                                <span>真皮 银色</span>
                              </a>
                              <a href="###">
                                <img src="../img/dateils_img/13 - resize,w_50,h_50.jpg" alt="" />
                                <span>真皮 黑色 牛皮</span>
                              </a>
                              <a href="###">
                                <img src="../img/dateils_img/14 - resize,w_50,h_50.jpg" alt="" />
                                <span>钢 黑色 精钢</span>
                              </a>
                              <a href="###">
                                <img src="../img/dateils_img/15 - resize,w_50,h_50.jpg" alt="" />
                                <span>钢 银色 精钢</span>
                              </a>
                            </div>
                          </div>
                          <div class="number">
                            <span>数量</span>
                            <input type="button" value="+" id="add" />
                            <input type="text" value="1" id="txt" />
                            <input type="button" value="-" id="minus" />
                          </div>
                          <div class="buy">
                            <input type="button" value="立即购买" id="buyBtn" />
                            <input type="button" value="加入购物车" id="addCart" />
                            <div class="twoCode">
                              <i></i>
                              <p>手机购买</p>
                              <b><img src="../img/dateils_img/16 - 62518.html.jpg" alt="" /></b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="adv">
                        <img src="../img/dateils_img/17 - 2903481becf6497dbc23e83757dc50cb.jpg" alt="" />
                      </div>
                    </div>
                  </div>`;
            })
            $('main').html(render);
        }
    });
})();