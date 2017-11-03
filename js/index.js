	$(function(){
		//竖向响应
		var yuan_height = $(window).height();
		$('#header .myheader').height(yuan_height)
		setTimeout(function(){
			console.log($('#four .left').height());
		},10)
		$(window).resize(function(){
			var window_height = $(window).height();
			var martop = yuan_height - window_height;
			var navtop = 106-martop/2;  
			if (navtop>=106) {
				navtop = 106;
			}else if(navtop<=28) {
				navtop=28;
			}
			var boxtop = 164-martop;
			if (boxtop>=164) {
				boxtop = 164;
			}else if(boxtop<=0) {
				boxtop=0;
			}
			var casetop = 124-martop;
			if (casetop>=124) {
				casetop = 124;
			}else if(casetop<=0) {
				casetop=0;
			}
			var contop = 198-martop;
			if (contop>=198) {
				contop = 198;
			}else if(contop<=0) {
				contop=0;
			}
			$('.margin-box').css('margin-top',boxtop)
			$('#two .margin-box').css('margin-top',casetop)
			$('#five .margin-box').css('margin-top',contop)
	    	$('#header nav').css('margin',navtop+'px 0')
		});
	})
//header
  var swiper = new Swiper('#header', {
	direction: 'vertical',
	freeMode : true,
	mousewheelControl : true,
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    slidesPerView: 'auto',
  });
	
//屏幕滚动
  var mySwiper = new Swiper ('#box', {
  	//竖向滚动
    direction: 'vertical',
    //过渡时间
    speed: 1000,
    //只能出现一个
    slidesPerView:'auto',
    // 如果需要分页器
    pagination: '#screen',
    paginationClickable:true,
	// 鼠标滚轮
	mousewheelControl : true,
	//键盘
	keyboardControl : true,
	//处理不满屏footer
	onTransitionEnd: function(swiper){
	  if(swiper.progress==1){
		  swiper.activeIndex=swiper.slides.length-1
	  }
    } 
  })
//横向第一页	轮播
  var mySwiperOne = new Swiper ('.one-container', {
  	//横向滚动
    direction: 'horizontal',
    //无缝轮播
    loop: true,
    //过渡时间
    speed: 500,
    //只能出现一个
    slidesPerView:1,
    //分页器
    pagination: '#one .swiper-pagination',
    paginationClickable:true,
	//键盘
	keyboardControl : true,
	//小手
	grabCursor : true,
	//自动轮播
	autoplay:3000,
	//进行操作后继续轮播
	autoplayDisableOnInteraction : false,
  })
//轮播--life more
$(function(){
	var temr=null;
	function more(){
		$('#one .swiper-slide').each(function(){
			if ($(this).hasClass('swiper-slide-active'))
			$(this).addClass('one-more-active').siblings().removeClass('one-more-active')
		})
	}
	setTimeout(more,500)
	temr = setInterval(more,3500)
	$('#one').mouseup(function(){setTimeout(more,500)})
})

//第二页 案例
var mySwiperOne = new Swiper ('.two-container', {
	//横向滚动
    direction: 'horizontal',
    slidesPerView: 'auto',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
})
//第三页 产品
var mySwiperOne = new Swiper ('.three-container', {
    direction: 'horizontal',
    slidesPerView: 3,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
})
//第4页 关于
var mySwiperOne = new Swiper ('.four-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView:'auto',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    noSwiping : true,
    noSwipingClass : 'stop-swiping',
})
//第5页 联系
var mySwiperOne = new Swiper ('.five-container', {
    direction: 'horizontal',
    slidesPerView:'auto',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
})