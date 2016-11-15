
/*----------------------主页----------------------------*/
// 换肤
var count=1;
var colorList = ['#4869ae','#b4d600','#f8b33a','#0abfcf','#e11355','#ba39d8'];
$('.changeSkin>span').click(function(){
	$(this).css({"background-positionY":"15px"}).siblings()
	.css({"background-positionY":"0px"});
	$('.nav').css({'backgroundColor':colorList[$(this).index()]});
	$('.content-left h1').css({'backgroundColor':colorList[$(this).index()]});
});

// 导航
$('.nav>ul>li').mouseover(function(){
	$('.box',$(this)).show();
}).mouseout(function(){
	$('.box',$(this)).hide();
})

// 轮播
var num=0;
var timer = setInterval(doMove,1000);
function doMove(){
	if(num > 4) num=0;
	$('.indicator>span').eq(num).addClass('active').siblings().removeClass('active');
	$('.banner img').eq(num).fadeIn(500).siblings('img').fadeOut(500);
	$('.indicator>span').eq(num).find('img').show().parent('span').siblings().find('img').hide();
	
	num++;
}
$('.indicator>span').mouseover(function(){
	clearInterval(timer);
	var index = $(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$('.banner img').eq(index).fadeIn(500).siblings('img').fadeOut(500);
	$(this).find('img').show().parent().siblings().find('img').hide();
}).mouseout(function(){
	num = $(this).index();
	timer = setInterval(doMove,1000);

});


// 新闻动态
$('.content-right-list>ul>li').mousemove(function(e){
	var index = $(this).index();
	$('.content-right-list>ul p').eq(index).show().siblings('p').hide();
	$('.content-right-list>ul p').css({
					'left':e.pageX + 10 + 'px',
					'top':e.pageY + 10 + 'px'
				});
}).mouseout(function(){
	$('p',$(this)).hide();
});

// 下方图片滑动
$('.rightbox>span').click(function(){
	var index = $(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$('.list').animate({"left":-800*index+"px"},1000);
	$(this).find('img').show().parent('span').siblings().find('img').hide();
});

/*---------------详情页----------------------------------*/

// 放大镜 插件调用
$(".jqzoom").imagezoom({
	xzoom: 310,
	yzoom: 310,
	offset: 5
});



// 选择图片
$('.imgbox').eq(1).show();
$('.imglist img').mouseover(function(){
	$(this).addClass('active');
}).mouseout(function(){
	$(this).removeClass('active');
});

$('.imglist img').click(function(){
	var $src = $(this).attr('src').split('.')[0];
	$('.imgbox>img').attr('src',$src+'_small.jpg');
	$('.imgbox>img').attr('rel',$src+'_big.jpg');
});


// 选择颜色
var colorArr = ['蓝白','绿白','黄白'];
$('.selcolor img').mouseover(function(){
	$(this).addClass('active').siblings().removeClass('active');
}).mouseout(function(){
	$(this).removeClass('active');
}).click(function(){
	$('.color>span').text(colorArr[$(this).index()]);
	var _src = $(this).attr('src').split('.')[0];
	$('.imgbox>img').attr('src',_src+'_one_small.jpg');
	$('.imgbox>img').attr('rel',_src+'_one_big.jpg');

	$('.imglist>.imglistbox').eq($(this).index()).show().siblings().hide();

});


// 产品展示
$('#show').click(function(){
	var $src = $('.imgbox>img').attr('rel');
	$('.showbox>img').attr('src',$src);
	$('.showImg').show();
});
$('.showImg').click(function(){
	$(this).hide();
})


// 产品介绍
$('.produce>span').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.produce-con>p').eq($(this).index()).show().siblings().hide();

});

// 尺寸选择
$('.size>span').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.sel>span').text($(this).text());
});

// 评分

$('.star>ul>li').mouseover(function(){
	$('.star-img').addClass( 'hover'+ $(this).index() );
}).mouseout(function(){
	$('.star-img').removeClass( 'hover'+ $(this).index() );
}).click(function(){
	$('.star-img').attr('class','star-img').addClass( 'click' + $(this).index() );
});

