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

    //ресайз и активация слайда
    $( window ).on('resize',function(){
        smaller();
        positionBtTop();
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

    /*buttom to top*/

    var scrollToTop = $("#go-top");

    /*position btn*/
    function positionBtTop(){
        var posCon = $(document.querySelector(".container")).offset();
        scrollToTop.css({'right': (posCon.left + 20) });
    }
    positionBtTop();

    if ($(window).scrollTop() >= "250") scrollToTop.fadeIn("slow");
    $(window).scroll(function() {
        if ($(window).scrollTop() <= "250")scrollToTop.fadeOut("slow");
        else scrollToTop.fadeIn("slow")
    });
    scrollToTop.click(function() {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false
    });

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



    /*form*/

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

   // var myDropzone = new Dropzone("#fileGo", { url: "/file/post"});
    $("#fileGo").dropzone({
        paramName: "file", // The name that will be used to transfer the file
        maxFilesize: 30, // MB
        url : 'file/to',
        maxFiles: 6,
        dictMaxFilesExceeded: "Не больше {{maxFiles}} файлов",
        dictRemoveFile: "Удалить",
        dictResponseError: "Ошибка загрузки",
        acceptedFiles: ".png,.jpg,.jpeg, .jfif, .gif",
        addRemoveLinks: true,
        error: function(){},
        maxfilesreached: function(){
            this.removeAllFiles();
        },
        init: function(){
            $(this.element).html("<div class=\"dz-message needsclick\">\n" +
                "  <img src='/img/icon/clip.png' alt=''> <span>Быберите файл.</span> До 5 файлов, объем не более 30Мб</div>");
        }
    });

    function asyncMap(){

        var script1 = document.createElement('script');
        var script2 = document.createElement('script');
        var script3 = document.createElement('script');
        var script4 = document.createElement('script');
        var script5 = document.createElement('script');

        script1.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A507d2a0f19e814015bca80edf0d9dc4de9d3caa842965e883280c3c219e3c692&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=true";
        script2.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A507d2a0f19e814015bca80edf0d9dc4de9d3caa842965e883280c3c219e3c692&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=true";
        script3.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A507d2a0f19e814015bca80edf0d9dc4de9d3caa842965e883280c3c219e3c692&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=true";
        script4.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A507d2a0f19e814015bca80edf0d9dc4de9d3caa842965e883280c3c219e3c692&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=true";
        script5.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A507d2a0f19e814015bca80edf0d9dc4de9d3caa842965e883280c3c219e3c692&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=true";


        document.getElementById('map_one').appendChild(script1);
        document.getElementById('map_two').appendChild(script2);
        document.getElementById('map_thee').appendChild(script3);
        document.getElementById('map_four').appendChild(script4);
        document.getElementById('map_five').appendChild(script5);


        //document.getElementById('map_one').src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A507d2a0f19e814015bca80edf0d9dc4de9d3caa842965e883280c3c219e3c692&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=true";
    }

    setTimeout(asyncMap,5000);

    $(".fillForm form").validate({
        rules: {
            // simple rule, converted to {required:true}
            qc: "required",
            inn: "required",
            cont: "required",
            name: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            qc: "Поле незаполнено",
            inn: "Поле незаполнено",
            cont: "Поле незаполнено",
            name: "Поле незаполнено",
            email: {
                required: "Поле незаполнено",
                email: "некорректный email"
            }
        }
    });

    $('.formContact__eff input, .formContact__eff textarea').on('focus',function(){

        $(this).closest(".formContact__eff").find('span').css({'fontSize': "12px", "top": "-6px"});
        console.log('jiji')

    });

    $('.formContact__eff input, .formContact__eff textarea').on('focusout',function(){
        var value = this.value;
        if (value.length > 0){
            $(this).closest(".formContact__eff").find('span').css({'fontSize': "12px", "top": "-6px"});
            console.log(this.value.length);
        }else {
            $(this).closest(".formContact__eff").find('span').removeAttr('style');
        }
    });

});

