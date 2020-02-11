$(document).ready(function(){
    var slider = $('.newsWrapper__slider');
    slider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

  $(".arrowNews__left,.arrowNews__right").on('click',function(){

      var move = $(this).attr('data-move');
      var where = (move === "right") ? 'slickNext' : 'slickPrev';
      slider.slick(where);
  });

    var manufacturer = $('.manufacturer__slider');

    manufacturer.slick({
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        dots: true
    });

    $( ".adressesTabs" ).tabs();

    $(".hamburger").on('click',function (){
        $(this).toggleClass("is-active");
        $(".topMenu__menu").toggleClass('menu-opened');
    });

    //ресаз и активация слайда
    $( window ).on('resize',function(){
        smaller();
    });

    var categoriesIndustries = $('.categoriesIndustries__row');
    function smaller(){
        var width = $(window).width();

        var destroy = categoriesIndustries.hasClass('slick-initialized');

        if (width <= 480 && !destroy){
            categoriesIndustries.slick({
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1,
                autoplaySpeed: 480,
                centerMode: true,
                dots: false
            });
        }else if (width > 500 && destroy){
            categoriesIndustries.slick('unslick');
        }

        console.log(categoriesIndustries.hasClass('slick-initialized'));
    }

    smaller();

    $(".categoriesAr__left,.categoriesAr__right").on('click',function(){

        var move = $(this).attr('data-move');
        var where = (move === "right") ? 'slickNext' : 'slickPrev';
        categoriesIndustries.slick(where);
    });

    $("#adressesTabs select").on('change',function(){

        $( "select option:selected" ).each(function() {
            var id = $(this).attr('data-selected');
            console.log("#"+id)
            $('.adressesTabs [href="#'+id+'"]').trigger( "click");
        });

    });

    /*cart*/
    $('.js-change-count').on('click',function(){
        var count = Number($(".js-count").text());
        var price = $(".price__box").attr('data-first-price');
        var delta = $(this).attr('data-delta');

        if (count <= 1 && delta === '-1')
            return;

        var res = Number(delta);
        count = (count + res);
        var allPrice = price * count;
        $(".price__box").html("₽"+ allPrice);
        $(".js-count").text(count);

    });
});

