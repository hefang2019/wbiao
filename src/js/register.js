(function () {

    //手机号码验证
    $('.user_tel input').on('blur', function () {

        let telval = this.val();
        //1、非空
        if (telval) {
            //2、正则验证
            let reg = /^1[3-9]\d{9}$/; //手机的正则
            let res = reg.test(telval);

            if (res) {

                $('.user_tel p').html('');
                //验证手机是否注册，
            } else {
                $('.user_tel p').html('请输入正确的手机号');
                $('.user_tel p').css('color', 'red');
            }
        } else {
            $('.user_tel p').html('请输入您的手机号');
            $('.user_tel p').css('color', 'red');
        }
    })
    $('.user_tel input').on('input', function (ev) {
        let val = this.value
        if (val.length > 11) {
            $('.user_tel p').html('手机号不能超过11位')
                .css({
                    color: 'red'
                })
            $(this).val(val.substr(0, 11))
        } else {
            $('.user_tel p').html('')
        }
    })

    //密码
    let isok = true;
    $('.pwd em').on('click', function () {

        if (isok) {
            $('.pwd input').attr('type', 'text');
            $('.pwd em').css('background-position', '-188px -137px');
            isok = !isok;
        } else {
            $('.pwd input').attr('type', 'password');
            $('.pwd em').css('background-position', '-142px -94px');
            isok = true;
        }


    });
    let isok1 = true;
    $('.pwd2 em').on('click', function () {

        if (isok1) {
            $('.pwd2 input').attr('type', 'text');
            $('.pwd2 em').css('background-position', '-188px -137px');
            isok1 = !isok1;
        } else {
            $('.pwd2 input').attr('type', 'password');
            $('.pwd2 em').css('background-position', '-142px -94px');
            isok1 = true;
        }

    });
})();