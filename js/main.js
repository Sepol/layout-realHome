$(function () {
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 1000,
        dots: true
    });
});


$(function () {
    $('.agents-slider__items').slick({
        arrows: false,
        fade: true,
        autoplay: 1000,
        dots: true
    });
});


$(function () {
    $('.slider-inner').slick({
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/testimonials-slider/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/testimonials-slider/arrow-right.png"></button>',
        fade: true,
        autoplay: 1000,
        dots: true
    });
});

var li = document.getElementsByClassName('.header-menu').getElementsByTagName('li');
	for(var i=0;i<li.length;i++){
		li[i].onclick = function(){
			for(var j=0;j<li.length;j++) li[j].className = '';
			this.className = 'active';
		}
	}