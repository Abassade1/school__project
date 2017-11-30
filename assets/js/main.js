var app = {
	carouselCtrl: function(){
        $(".owl-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop:true,
            margin:0,
            center: true,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:false
                }
            }
        });
    }
}