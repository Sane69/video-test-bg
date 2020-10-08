$(document).ready(function() {
    $('.header__nav--li').click(function() {
        $('.header__nav--block').toggleClass('active')
    })
    
    $('.header__burger').click(function() {
        $('.header__burger, .header__mobile').toggleClass('active')
        $('body').toggleClass('lock')
    })

    $('.test__slider').slick({
        arrows: false,
        dots: true
    })
    
    $('.faq__item--plus').click(function() {
        $(this).next('.faq__item--content').slideToggle()
        $(this).parent().toggleClass('faq__item--plus_active')
        $(this).closest('.faq__item--plus').toggleClass('active')
    })

    $('.fancybox').fancybox()

    $('.footer__arrow--link').click(function(e) {
        var target = $(this.hash);
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000)
      })
})