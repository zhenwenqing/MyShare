/*导航导航置顶*/
$(function() {
	if($(window).scrollTop() > 0) {
		$(".header").addClass("headerFix");
	}

	$(window).scroll(function(){
		if($(window).scrollTop() > 0) {
			$(".header").addClass("headerFix");
		} else {
			$(".header").removeClass("headerFix");
		}
	})



    var windowHeight = $(window).height();
    if(windowHeight<800){
        $(".productMenu,.productSub").addClass('showscroll')
    }else{
        $(".productMenu,.productSub").removeClass('showscroll')
    }
    //移动端
    if(windowHeight>630){
        $(".m-second-box .m-secondlist").css('min-height',windowHeight-380+'px')
    }

    // //语言切换跳转英文版
    // var language = navigator.language || navigator.userLanguage;
    // if(language=='en'){
    //     var navlang = localStorage.getItem("marketingforcelang");
    //     if(navlang==null){
    //         localStorage.setItem("marketingforcelang","1");
    //         window.location.href= mainUrl+'/en'
    //     }
    // }

    _globalMenuActive()
    function _globalMenuActive(){
        var _domain = location.href
        if(_isMobile()){
            /*移动端高亮暂时去掉*/
           /* $('.m-second-box .m-navitem').each(function(i,el){
                var link = $(el).find('a').attr('href')
                if(link == _domain){
                    $(el).addClass('active')
                    $(el).find('.m-second-level').addClass('active')
                    $(el).closest('.m-second-item').addClass('active')
                    BackSecondShow()
                }
            })
            //移动端产品三级
            $('.m-productMenu .m-three-item').each(function(i,el){
                var link = $(el).find('a').attr('href')
                if(link == _domain){
                    $(el).addClass('active')
                    $(el).parent('.m-three-level').addClass('active')
                    $(el).closest('.m-second-item').addClass('active')
                    BackSecondShow()
                }
            })*/

        }else{
            $('.header .menu-list li').each(function(i,el){
                var link = $(el).find('a').attr('href')
                if(link == _domain){
                    $(el).addClass('activeS')
                    $(el).closest('.first-li').addClass('activeM')
                }
            })
            //PC产品三级
            $(".productSub .subitem").each(function(i,el){
                $(el).find('.submain .subtit').each(function(j,e){
                    var link = $(e).find('a').attr('href')
                    if(link === _domain){
                        $(".productSub .subitem").eq(0).removeClass('activeP')
                        $(e).addClass('activeP')
                        $(".productSub .subitem").eq(i).addClass('activeP')
                        $(".productMenu .productList .navitem").eq(i).addClass('activeP')
                        $("#productNav").addClass("activeM")
                    }
                    //产品四级
                    $(e).find('.lllist .itemfour').each(function(k,e3){
                        var link4 = $(e3).attr('href')
                        if(link4 === _domain){
                            $(".productSub .subitem").eq(i).addClass('activeP').siblings().removeClass('activeP') //二级右侧
                            $(e3).addClass('activeT')//四级
                            $(e3).parents('.subtit').eq(i).addClass('activeP')
                            $(".productMenu .productList .navitem").eq(i).addClass('activeP')//二级左侧
                            $("#productNav").addClass("activeM") //一级
                        }
                    })
                })

            })

        }
    }

})





// 语言切换
$('.switch-language .language-box a').on('click',function(){
	$(this).addClass('curLg').siblings().removeClass('curLg')
	// $(this).parents().find('.switch-language').addClass('curswitch')
})

//PC悬浮产品导航
$('#productNav').on('mouseenter',function(){
    $(".header").addClass("active")
    $("div.productBG").fadeIn(50, function (a) {
        $(".productBox").addClass("active")
    })
}).on('mouseleave',function(){
    $(".header").removeClass("active")
    $("div.productBG").fadeOut(50, function (a) {
        $(".productBox").removeClass("active")
    })
})
//PC产品二级
$('.productBox .productList .navitem').on('mouseenter',function(){
    $('.productSub .subitem').each(function (i,el){
        if($(el).hasClass('activeP')){
            $(el).removeClass('activeP')
        }
    })
    $(this).addClass('active').siblings().removeClass('active')
    var index = $(this).index()
    $('.productSub .subitem').eq(index).addClass('active').siblings().removeClass('active')
    //仅在台式大屏幕上特殊处理 营销云
    if($(this).index() == 0){
        $(".productSub").addClass('showscroll')
    }else if($(window).height() > 800){
        $(".productSub").removeClass('showscroll')
    }
})
//点击遮罩
$(".productBG").on("click", function (a) {
    if ($(a.target).hasClass("productBG")) {
        $(this).removeClass("active").hide()
    }
});
// 判断浏览器函数1
function _isMobile(){
    var userAgentInfo = navigator.userAgent;

    var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];

    var mobile_flag = false;

    //根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
        }
    }
    var screen_width = window.screen.width;
    var screen_height = window.screen.height;

    //根据屏幕分辨率判断是否是手机
    if (screen_width > 325 && screen_width < 767) {
        mobile_flag = true;
    }

    return mobile_flag;
}


$(function(){
	// 试用表单
	$('.apply-for-click').on('click',function(){
	    if(trialUrl){
            window.open (trialUrl)
        }

	})
	// 咨询表单
	$('.consult-for-click').on('click',function(){
	    if(consultUrl){
            window.open (consultUrl)
        }

	})
})

//移动端导航菜单
$(document).ready(function () {
    $(".m-menuBtn").on("click", function (a) {
        if ($(a.target).hasClass("focused")) {
            navMenuClose()
        }else{
            navMenuOpen()
        }
    });
    $(".menu-back").on("click", function (a) {
        if($(".menu-back").hasClass('secondshow')){
            BackSecondHide()
        }else{
            if ($(a.target).hasClass("menu-back")) {
                navMenuClose()
            }
        }
    });
   /* $(".menu-box ul.main-menu>li>a").on("click", function (a) {
        var b = $(this);
        if (b.parent().find("ul:first").length) {
            a.preventDefault();
            if (!b.parent().hasClass("active")) {
                $(".m-menuNav ul.main-menu ul").slideUp("fast", function () {
                    $(".m-menuNav ul.main-menu > li").removeClass("active")
                });
                b.parent().find("ul:first").slideDown("fast", function () {
                    b.parent().addClass("active")
                });
            } else {
                b.parent().find("ul:first").slideUp("fast", function () {
                    $(this).parent().removeClass("active")
                });
            }
        } else {
            $(".m-menuNav ul.main-menu ul").slideUp("fast");
            $(".m-menuNav ul.main-menu > li").removeClass("active");
            b.parent().addClass("active")
        }
    });*/

    //移动端点击二级三级
    $(".menu-box ul.main-menu>li>a").on("click", function (a) {
        var b = $(this);
        BackSecondShow()
        var dataID = b.parent().attr('data-id')
        $('.m-second-box .m-second-item').eq(dataID).addClass('active').siblings().removeClass('active')
    })
    $('.m-second-box .m-navitem').on('click',function(e){
        if ($(e.target).is('.m-three-item-a') || $(e.target).is('.m-fourth-item-a')) {
            $(this).stopPropagation();
        }else{
            var b = $(this)
            b.addClass('active').siblings().removeClass('active')
            b.find(".m-three-level").slideToggle(300);
            b.siblings(".m-navitem").find(".m-three-level").slideUp(300);
            b.addClass("active").siblings("li").removeClass("active")
        }
    })
});
var BackSecondShow = function (){
    $('.main-menu').addClass('firstHide')
    $('.m-second-box').show()
    $('.menu-back').addClass('secondshow')
}
var BackSecondHide = function (){
    $('.main-menu').removeClass('firstHide')
    $('.m-second-box').hide()
    $(".menu-back").removeClass('secondshow')
};

var navMenuOpen = function () {
    $(".m-menuBtn").addClass("focused");
    $("div.m-menuNav").fadeIn(50, function (a) {
        $(".menu-box").addClass("opened")
    })
    document.body.style.overflow='hidden'
};
var navMenuClose = function () {
    $(".m-menuBtn").removeClass("focused");
    $(".menu-box").removeClass("opened");
    $("div.m-menuNav").fadeOut(200)
    document.body.style.overflow = 'auto';
};
//问答
$(".asked .asked-ul li").click(function(){

    $(this).find(".title-box").slideToggle(300);
    $(this).siblings("li").find(".title-box").slideUp(300);
    $(this).addClass("active").siblings("li").removeClass("active")
    //解决bug来回切换+-问题处理
    var child = $(this).find(".title-box");
    var _this = $(this)
    setTimeout(function (){
        if(child.css('display') == 'none'){
            _this.removeClass("active")
        }else{
            _this.addClass("active")
        }
    },350)

})
var navMenuOpen = function () {
    $(".m-menuBtn").addClass("focused");
    $("div.m-menuNav").fadeIn(50, function (a) {
        $(".menu-box").addClass("opened")
    })
    document.body.style.overflow='hidden'
};
var navMenuClose = function () {
    $(".m-menuBtn").removeClass("focused");
    $(".menu-box").removeClass("opened");
    $("div.m-menuNav").fadeOut(200)
    document.body.style.overflow = 'auto';
};

if(!getCookie('set-cookie')){
    $('.globa-cookie').css({
        'display':'flex'
    })
}
function noSetCokie() {
    setCookie('set-cookie', 'no')
    $('.globa-cookie').hide()
    setCookie('_setcookie', 'delcookie')
    window.location.reload() // 重载 刷新登陆状态
}
function yesSetCokie() {
    setCookie('set-cookie', 'yes')
    $('.globa-cookie').hide()
}

function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  var parts = window.location.host.split('.');
  var tld = parts[parts.length - 2] + '.' + parts[parts.length - 1];
  var mainDomain = parts.length > 2 ? tld : parts[0];
  document.cookie = cname + "=" + cvalue + "; " + expires + "; domain=" + mainDomain + "; path=/";
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}